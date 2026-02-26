import { NutritionalResponse } from "../../types/types";

export const gptResponseFilter = (gptResponse: string):NutritionalResponse => {
    const trimmed = gptResponse.trim();
    const marker = trimmed.split(':')[0];

    if (marker === 'Error' || marker === 'Warning') {
        return { Other: trimmed };
    }

    // Prefer explicit JSON code block when present.
    const fencedMatch = trimmed.match(/```json\s*([\s\S]*?)\s*```/i);
    const directJson = fencedMatch?.[1]?.trim() ?? trimmed;

    const start = directJson.indexOf('{');
    const end = directJson.lastIndexOf('}');
    const candidate = start >= 0 && end > start ? directJson.slice(start, end + 1) : directJson;
    const parsed = JSON.parse(candidate);

    if (parsed?.Error || parsed?.Warning) {
        return { Other: JSON.stringify(parsed) };
    }

    return parsed;

}
