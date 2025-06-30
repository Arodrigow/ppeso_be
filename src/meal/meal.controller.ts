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
    @Post(':userId')
    async createMeal(@Body('meal') meal: any, @Body('daily_limit') daily_limit:number) {
        return await this.mealService.createmMeal(meal, Number(daily_limit));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId/:dailyId')
    async getMealByDailyId(@Param('dailyId') dailyId: string) {
        return await this.mealService.findMealByDailyId(Number(dailyId));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Delete(':userId/:mealId')
    async deleteMealById(@Param('mealId') mealId: string) {
        return await this.mealService.deleteMealById(Number(mealId));
    }
}
