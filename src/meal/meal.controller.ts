import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MealService } from './meal.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';

@Controller('meal')
export class MealController {
    constructor(
        private readonly mealService: MealService
    ){}

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post()
    createMeal(@Body('meal') meal: any) {
        return this.mealService.createmMeal(meal);
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId/:dailyId')
    getMealByDailyId(@Param('dailyId') dailyId: string) {
        return this.mealService.findMealByDailyId(Number(dailyId));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Delete(':userId/:mealId')
    deleteMealById(@Param('mealId') mealId: string) {
        return this.mealService.deleteMealById(Number(mealId));
    }
}
