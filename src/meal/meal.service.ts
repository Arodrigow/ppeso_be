import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class MealService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    createmMeal(meal: Prisma.MealCreateInput) {
        
        return this.prismaService.meal.create({
            data:meal
        });
    }

    findMealByDailyId(dailyId: number) {
        return this.prismaService.meal.findMany({
            where: {
                dailyId: dailyId
            }
        })
    }

    deleteMealById(mealId: number) {
        //TODO: check if mealId is valid
        return this.prismaService.meal.delete({
            where: {
                id: mealId
            }
        })
    }
}
