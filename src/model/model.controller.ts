import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ModelService } from './model.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

type getNutrition = {
    data: string
}

@Controller('model')
export class ModelController {

    constructor(private readonly modelService: ModelService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    getModel(@Body() body: getNutrition) {
        return this.modelService.getNutrition(body.data);
    }

}
