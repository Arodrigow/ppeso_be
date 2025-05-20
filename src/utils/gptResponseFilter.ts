import { NutritionalResponse } from "../../types/types";

export const gptResponseFilter = (gptResponse: string):NutritionalResponse => {
    const other = gptResponse.split(':')[0];
    if(other === 'Error' || other === 'Warning')
        return {Other: gptResponse}

    const resp = gptResponse.replaceAll('### Output:', '').replaceAll('"```json', '').replaceAll('`', '').replaceAll('json', '');
    
    return JSON.parse(resp)

}