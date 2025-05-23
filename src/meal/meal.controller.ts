import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MealService } from './meal.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('meal')
export class MealController {
    constructor(
        private readonly mealService: MealService
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    createMeal(@Body('meal') meal: any) {
        return this.mealService.createmMeal(meal);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':dailyId')
    getMealByDailyId(@Param('dailyId') dailyId: string) {
        return this.mealService.findMealByDailyId(Number(dailyId));
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':mealId')
    deleteMealById(@Param('mealId') mealId: string) {
        return this.mealService.deleteMealById(Number(mealId));
    }
}
