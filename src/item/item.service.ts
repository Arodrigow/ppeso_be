import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    createItem(items: Prisma.ItemCreateManyInput) {
        return this.prisma.item.createMany({
            data: items
        })
    }

    findItemsOfMeals(mealId: number) {
        return this.prisma.item.findMany({
            where: {
                mealId
            }
        });
    }
}
