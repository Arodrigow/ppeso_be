import OpenAI from "openai";
import { NutritionalResponse } from "../../types/types";
import { gptSystemRole, gptUserRole } from "./gptConsts";
import { gptResponseFilter } from "./gptResponseFilter";

const isFiniteNumber = (value: unknown): value is number =>
    typeof value === 'number' && Number.isFinite(value);

const looksLikeRecipeInput = (data: string) => {
    const normalized = data.toLowerCase();
    return normalized.includes('ingredientes') ||
        normalized.includes('modo de preparo') ||
        normalized.includes('modo preparo') ||
        normalized.split('\n').filter(Boolean).length >= 6;
};

const hasMeaningfulNutrition = (response: NutritionalResponse) => {
    const total = response.total;
    if (!total) {
        return false;
    }

    const totals = [
        total.calorias_kcal,
        total.carboidratos_g,
        total.proteinas_g,
        total.gorduras_g,
        total.fibras_g,
        total.sodio_mg,
    ];

    return totals.some((value) => isFiniteNumber(value) && value > 0);
};

const isValidNutritionResponse = (response: NutritionalResponse, originalInput: string) => {
    if (response.Other) {
        return false;
    }

    if (!Array.isArray(response.itens) || response.itens.length === 0) {
        return false;
    }

    if (!hasMeaningfulNutrition(response)) {
        return false;
    }

    if (looksLikeRecipeInput(originalInput) && response.total?.porcao !== '100g') {
        return false;
    }

    return true;
};

const extractContent = (response: unknown) =>
    (response as { choices?: Array<{ message?: { content?: string } }> })?.choices?.[0]?.message?.content;

const requestNutrition = async (
    client: OpenAI,
    model: string,
    temperature: number,
    maxTokens: number,
    data: string,
    extraInstructions?: string,
) => {
    let rawResponse = await client.chat.completions.create({
        messages: [
            { role: "system", content: gptSystemRole },
            {
                role: "user",
                content: `${gptUserRole}${extraInstructions ? `\n\nInstrucoes extras:\n${extraInstructions}` : ''}\n\nEntrada do usuario:\n${data}`
            }
        ],
        temperature,
        top_p: 1.0,
        max_tokens: maxTokens,
        model: model
    });

    if (typeof rawResponse === 'string') {
        rawResponse = JSON.parse(rawResponse);
    }

    const content = extractContent(rawResponse);
    if (!content) {
        console.error('Resposta inesperada da API do ChatGPT:', JSON.stringify(rawResponse, null, 2));
        throw new Error('Resposta invalida ou vazia da API do ChatGPT');
    }

    return {
        content,
        parsed: gptResponseFilter(content),
    };
};

export const chatGPT = async (data: string) => {
    const token = process.env.OPENAI_API_KEY;
    const endpoint = process.env.OPENAI_BASE_URL ?? "https://models.github.ai/inference";
    const model = process.env.OPENAI_MODEL ?? "openai/gpt-4.1-mini";
    const temperature = Number(process.env.OPENAI_TEMPERATURE ?? '0.2');
    const maxTokens = Number(process.env.OPENAI_MAX_TOKENS ?? '2500');

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const firstAttempt = await requestNutrition(client, model, temperature, maxTokens, data);
    if (isValidNutritionResponse(firstAttempt.parsed, data)) {
        return firstAttempt.parsed;
    }

    const retryInstructions = [
        'Sua resposta anterior ficou invalida ou nutricionalmente inconsistente.',
        'Reenvie um JSON valido no formato exigido.',
        'Se a entrada for receita, normalize tudo para 100g da preparacao final.',
        'Os ingredientes devem representar a composicao estimada desses 100g finais.',
        'Nao retorne valores zerados para ingredientes que claramente contribuem nutricionalmente.',
        'Nao use markdown nem comentarios.',
    ].join(' ');

    const retryAttempt = await requestNutrition(client, model, temperature, maxTokens, data, retryInstructions);
    return retryAttempt.parsed;
};
