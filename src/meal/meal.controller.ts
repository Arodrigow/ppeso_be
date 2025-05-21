import { Controller, Delete, Get, Param } from '@nestjs/common';
import { MealService } from './meal.service';

@Controller('meal')
export class MealController {
    constructor(
        private readonly mealService: MealService
    ){}

    @Get(':dailyId')
    getMealByDailyId(@Param('dailyId') dailyId: number) {
        return this.mealService.findMealByDailyId(dailyId);
    }

    @Delete(':mealId')
    deleteMealById(@Param('mealId') mealId: number) {
        return this.mealService.deleteMealById(mealId);
    }
}
