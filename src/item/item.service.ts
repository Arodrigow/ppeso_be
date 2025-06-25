import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async createItem(items: Prisma.ItemCreateManyInput) {
        try {
            return await this.prisma.item.createMany({
                data: items
            })
        } catch (error) {
            throw new BadRequestException('Erro ao criar novo item: ', error)
        }
    }

    async findItemsOfMeals(mealId: number) {
        try {

            return await this.prisma.item.findMany({
                where: {
                    mealId
                }
            });
        } catch (error) {
            throw new BadRequestException('Erro ao listas os itens de uma refeição: ', error)
        }
    }
}
