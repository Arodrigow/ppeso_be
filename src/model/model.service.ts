import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { chatGPT } from '../utils/model'

@Injectable()
export class ModelService {
    private readonly logger = new Logger(ModelService.name);

    async getNutrition(data: string) {

        try {
            return await chatGPT(data)
        } catch (error) {
            this.logger.error(`Erro de comunicacao com o modelo de IA: ${error.message}`, error.stack);
            throw new BadRequestException('Erro de comunicacao com o servico de nutricao.', { cause: error, description: 'Nao foi possivel obter os dados nutricionais.' });
        }
    }
}
