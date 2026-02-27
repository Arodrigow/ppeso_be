import { NutritionalResponse } from "../../types/types";

const normalizeJsonLikeText = (value: string) =>
    value
        .replace(/^\uFEFF/, '')
        .replaceAll('### Output:', '')
        .replace(/[“”]/g, '"')
        .replace(/[‘’]/g, "'")
        .replace(/,\s*([}\]])/g, '$1')
        .trim();

const extractBalancedJsonObject = (value: string): string | null => {
    const start = value.indexOf('{');
    if (start < 0) {
        return null;
    }

    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let i = start; i < value.length; i++) {
        const char = value[i];

        if (inString) {
            if (escaped) {
                escaped = false;
                continue;
            }
            if (char === '\\') {
                escaped = true;
                continue;
            }
            if (char === '"') {
                inString = false;
            }
            continue;
        }

        if (char === '"') {
            inString = true;
            continue;
        }

        if (char === '{') {
            depth++;
        } else if (char === '}') {
            depth--;
            if (depth === 0) {
                return value.slice(start, i + 1);
            }
        }
    }

    return null;
};

const safeParseJson = (value: string): unknown | null => {
    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
};

export const gptResponseFilter = (gptResponse: string):NutritionalResponse => {
    const trimmed = gptResponse.trim();
    const marker = trimmed.split(':')[0];

    if (marker === 'Error' || marker === 'Warning') {
        return { Other: trimmed };
    }

    // Prefer explicit JSON code block when present.
    const fencedMatch = trimmed.match(/```json\s*([\s\S]*?)\s*```/i);
    const directJson = fencedMatch?.[1]?.trim() ?? trimmed;
    const candidate = extractBalancedJsonObject(directJson) ?? directJson;

    const parsed =
        safeParseJson(candidate) ??
        safeParseJson(normalizeJsonLikeText(candidate)) ??
        safeParseJson(normalizeJsonLikeText(directJson));

    if (!parsed || typeof parsed !== 'object') {
        return { Other: trimmed };
    }

    if ((parsed as Record<string, unknown>)?.Error || (parsed as Record<string, unknown>)?.Warning) {
        return { Other: JSON.stringify(parsed) };
    }

    return parsed as NutritionalResponse;

}
