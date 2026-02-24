import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MealService } from './meal.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Meal')
@ApiBearerAuth()
@Controller('meal')
export class MealController {
    constructor(
        private readonly mealService: MealService
    ){}

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post(':userId')
    @ApiOperation({ summary: 'Criar refeicao' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['meal', 'daily_limit'],
            properties: {
                meal: { type: 'object', additionalProperties: true },
                daily_limit: { type: 'number', example: 2000 },
            },
        },
    })
    async createMeal(@Body('meal') meal: any, @Body('daily_limit') daily_limit:number) {
        return await this.mealService.createmMeal(meal, Number(daily_limit));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId/:dailyId')
    @ApiOperation({ summary: 'Buscar refeicoes por ID do diario' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiParam({ name: 'dailyId', type: Number, description: 'ID do diario' })
    async getMealByDailyId(@Param('dailyId') dailyId: string) {
        return await this.mealService.findMealByDailyId(Number(dailyId));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Delete(':userId/:mealId')
    @ApiOperation({ summary: 'Excluir refeicao por ID' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiParam({ name: 'mealId', type: Number, description: 'ID da refeicao' })
    async deleteMealById(@Param('mealId') mealId: string) {
        return await this.mealService.deleteMealById(Number(mealId));
    }
}
