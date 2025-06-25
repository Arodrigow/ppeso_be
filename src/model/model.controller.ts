import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ModelService } from './model.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';

type getNutrition = {
    data: string
}

@Controller('model')
export class ModelController {

    constructor(private readonly modelService: ModelService) {}

    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Post(':userId')
    async getModel(@Body() body: getNutrition) {
        return await this.modelService.getNutrition(body.data);
    }

}
