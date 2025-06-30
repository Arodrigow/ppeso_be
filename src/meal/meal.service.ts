import { DailyService } from '@/daily/daily.service';
import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class MealService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly dailyService: DailyService
    ) { }

    async createmMeal(meal: Prisma.MealCreateInput, daily_limit) {
        try {
            const mealResp = await this.prismaService.meal.create({
                data: meal
            });

            await this.dailyService.updateDaily(mealResp.dailyId, mealResp.calorias_kcal, daily_limit)

            return mealResp

        } catch (error) {
            throw new BadRequestException('Erro ao criar nova refeição: ', error)
        }

    }

    async findMealByDailyId(dailyId: number) {
        try {
            return await this.prismaService.meal.findMany({
                where: {
                    dailyId: dailyId
                }
            })

        } catch (error) {
            throw new BadRequestException('Erro ao encontrar refeição por dia: ', error)
        }
    }

    async deleteMealById(mealId: number) {
        try {

            const mealToDelete = await this.prismaService.meal.findUnique({
                where: { id: mealId }
            });

            const deletedMeal = await this.prismaService.meal.delete({
                where: { id: mealId }
            });

            await this.dailyService.updateDailyCalOnMealDelete(mealToDelete?.dailyId, mealToDelete?.calorias_kcal)

            return deletedMeal;
        } catch (error) {
            throw new BadRequestException('Erro ao deletar refeição: ', error)
        }
    }
}
