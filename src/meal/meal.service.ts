import { DailyService } from '@/daily/daily.service';
import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class MealService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly dailyService: DailyService
    ) { }

    async createmMeal(meal: Prisma.MealCreateInput) {

        const mealResp = await this.prismaService.meal.create({
            data: meal
        });

        await this.dailyService.updateDaily(mealResp.dailyId, mealResp.calorias_kcal)

        return mealResp
    }

    async findMealByDailyId(dailyId: number) {
        return await this.prismaService.meal.findMany({
            where: {
                dailyId: dailyId
            }
        })
    }

    async deleteMealById(mealId: number) {
        const mealToDelete = await this.prismaService.meal.findUnique({
            where: { id: mealId }
        });

        const deletedMeal = await this.prismaService.meal.delete({
            where: { id: mealId }
        });

        await this.dailyService.updateDailyCalOnMealDelete(mealToDelete?.dailyId, mealToDelete?.calorias_kcal)

        return deletedMeal;
    }
}
