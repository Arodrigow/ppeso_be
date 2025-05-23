import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    createItem(data: Prisma.ItemCreateInput) {
        console.log('data', data);
        return this.prisma.item.create({
            data
        });
    }

    findItemsOfMeals(mealId: number) {
        return this.prisma.item.findMany({
            where: {
                mealId
            }
        });
    }
}
