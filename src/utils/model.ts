import OpenAI from "openai";
import { gptSystemRole, gptUserRole } from "./gptConsts";
import { gptResponseFilter } from "./gptResponseFilter";

export const chatGPT = async (data: string) => {
    const token = process.env.OPENAI_API_KEY;
    const endpoint = "https://models.github.ai/inference";
    const model = "openai/gpt-4.1-mini";

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    let rawResponse = await client.chat.completions.create({
        messages: [
            { role: "system", content: gptSystemRole },
            { role: "user", content: `${gptUserRole}\n\nEntrada do usuario:\n${data}` }
        ],
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 1000,
        model: model
    });

    if (typeof rawResponse === 'string')
        rawResponse = JSON.parse(rawResponse)

    const content = rawResponse?.choices?.[0]?.message?.content;

    if (content) {
        return gptResponseFilter(content);
    }

    console.error('Resposta inesperada da API do ChatGPT:', JSON.stringify(rawResponse, null, 2));
    throw new Error('Resposta inválida ou vazia da API do ChatGPT');
}
