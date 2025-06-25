import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class DailyService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async createDaily(data: { date: string, userId: number }) {
        const { date, userId } = data;
        if (!date || !userId) {
            throw new BadRequestException('Date and User ID are required');
        }
        try {

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
        } catch (err) {
            throw new BadRequestException('Erro ao criar dia', err)
        }
    }

    async findDailyByDateAndUserId(data: { date: string, userId: number }) {
        try {
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
        } catch (err) {
            throw new BadRequestException('Erro ao buscar dia', err);
        }
    }

    async findAllDailyByUserId(userId: number) {
        try {
            const daily = await this.prismaService.daily.findMany({
                where: {
                    userId
                },
                select: {
                    id: true,
                    data: true,
                    calorias_total: true
                }
            });

            return daily;

        } catch (err) {
            throw new BadRequestException('Erro ao listar todos os dias por usuário', err)
        }
    }

    async updateDaily(dailyId, calorias_kcal) {
        try {

            await this.prismaService.daily.update({
                where: { id: dailyId },
                data: {
                    calorias_total: {
                        increment: calorias_kcal ?? 0,
                    },
                },
            });
        } catch (err) {
            throw new BadRequestException('Erro ao atualizar o dia com valor positivo', err)
        }
    }

    async updateDailyCalOnMealDelete(dailyId, calorias_kcal) {
        try {
            await this.prismaService.daily.update({
                where: { id: dailyId },
                data: {
                    calorias_total: {
                        decrement: calorias_kcal ?? 0,
                    },
                },
            });
        } catch (err) {
            throw new BadRequestException('Erro ao atualizar o dia com valor negativo', err)
        }
    }
}
