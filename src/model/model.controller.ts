import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ModelService } from './model.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

type getNutrition = {
    data: string
}

@ApiTags('Model')
@ApiBearerAuth()
@Controller('model')
export class ModelController {

    constructor(private readonly modelService: ModelService) {}

    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Post(':userId')
    @ApiOperation({ summary: 'Obter analise nutricional via modelo' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['data'],
            properties: {
                data: { type: 'string', example: '1 banana, 2 ovos e 100g de arroz' },
            },
        },
    })
    async getModel(@Body() body: getNutrition) {
        return await this.modelService.getNutrition(body.data);
    }

}
