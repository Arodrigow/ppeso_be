import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Prisma } from '@prisma/client';

@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService

    ){}

    @Post()
    createItem(@Body('data') data: Prisma.ItemCreateInput){
        return this.itemService.createItem(data);
    }

    @Get(':mealId')
    findItemsOfMeals(@Param('mealId') mealId: string) {
        return this.itemService.findItemsOfMeals(Number(mealId));
    }
}
