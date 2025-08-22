import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { chatGPT } from '../utils/model'

@Injectable()
export class ModelService {
    private readonly logger = new Logger(ModelService.name);

    async getNutrition(data: string) {

        try {            
            return await chatGPT(data)
        } catch (error) {
            this.logger.error(`Erro de comunicação com o ChatGPT: ${error.message}`, error.stack);
            throw new BadRequestException('Erro de comunicação com o serviço de nutrição.', { cause: error, description: 'Não foi possível obter os dados nutricionais.' });
        }
    }
}
