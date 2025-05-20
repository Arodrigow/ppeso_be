import { Injectable } from '@nestjs/common';
import {chatGPT} from '../utils/model'

@Injectable()
export class ModelService {

    getNutrition(data: string) {
        return chatGPT(data)
    }
}
