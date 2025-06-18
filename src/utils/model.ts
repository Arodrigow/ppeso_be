import OpenAI from "openai";
import { gptSystemRole, gptUserRole } from "./gptConsts";
import { gptResponseFilter } from "./gptResponseFilter";

export const chatGPT = async (data: string) => {
    const token = process.env.OPENAI_API_KEY;
    const endpoint = "https://models.github.ai/inference";
    const model = "openai/gpt-4.1-mini";

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const response = await client.chat.completions.create({
        messages: [
            { role: "system", content: gptSystemRole },
            { role: "user", content: gptUserRole + JSON.stringify(data) }
        ],
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 1000,
        model: model
    });

    if (response.choices[0].message.content)
        return gptResponseFilter(response.choices[0].message.content);

    return {}
}
