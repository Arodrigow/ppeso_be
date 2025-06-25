import { BadRequestException, Injectable } from '@nestjs/common';
import { chatGPT } from '../utils/model'

@Injectable()
export class ModelService {

    async getNutrition(data: string) {
        try {

            return await chatGPT(data)
        } catch (error) {
            throw new BadRequestException('Erro de comunicação com o chatgpt: ', error)
        }
    }
}
