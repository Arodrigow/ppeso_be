import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
    constructor(
        private readonly mealService: MealService
    ){}

    @Post()
    createMeal(@Body('meal') meal: any) {
        return this.mealService.createmMeal(meal);
    }

    @Get(':dailyId')
    getMealByDailyId(@Param('dailyId') dailyId: string) {
        return this.mealService.findMealByDailyId(Number(dailyId));
    }

    @Delete(':mealId')
    deleteMealById(@Param('mealId') mealId: string) {
        return this.mealService.deleteMealById(Number(mealId));
    }
}
