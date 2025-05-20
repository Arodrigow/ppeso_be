import { Body, Controller, Post } from '@nestjs/common';
import { ModelService } from './model.service';

type getNutrition = {
    data: string
}

@Controller('model')
export class ModelController {

    constructor(private readonly modelService: ModelService) {}

    @Post()
    getModel(@Body() body: getNutrition) {
        return this.modelService.getNutrition(body.data);
    }

}
