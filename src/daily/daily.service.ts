import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DailyService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async createDaily(data: { date: string, userId: number }) {
        const { date, userId } = data;
        if (!date || !userId) {
            throw new Error('Date and User ID are required');
        }
        const existingDaily = await this.findDailyByDateAndUserId(data);
        if (existingDaily) {
            return existingDaily
        }

        const daily = await this.prismaService.daily.create({
            data: {
                data: new Date(date),
                userId
            }
        });
        return daily;
    }

    async findDailyByDateAndUserId(data: { date: string, userId: number }) {
        const { date, userId } = data;
        const daily = await this.prismaService.daily.findFirst({
            where: {
                data: {
                    gte: new Date(new Date(date).setHours(0, 0, 0, 0)),
                    lt: new Date(new Date(date).setHours(23, 59, 59, 999))
                },
                userId
            }
        });
        return daily;
    }

    async findAllDailyByUserId(userId: number) {
        const daily = await this.prismaService.daily.findMany({
            where: {
                userId
            },
            select:{
                id: true,
                data:true,
                calorias_total:true
            }
        });
        
        return daily;
    }

    async updateDaily(dailyId, calorias_kcal) {
        await this.prismaService.daily.update({
            where: { id: dailyId },
            data: {
                calorias_total: {
                    increment: calorias_kcal ?? 0,
                },
            },
        });
    }

    async updateDailyCalOnMealDelete(dailyId, calorias_kcal) {
        await this.prismaService.daily.update({
            where: { id: dailyId },
            data: {
                calorias_total: {
                    decrement: calorias_kcal ?? 0,
                },
            },
        });
    }
}
