import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';

@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService

    ){}

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post(':userId')
    createItem(@Body('data') data: Prisma.ItemCreateManyInput){
        return this.itemService.createItem(data);
    }
    
    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId/:mealId')
    findItemsOfMeals(@Param('mealId') mealId: string) {
        return this.itemService.findItemsOfMeals(Number(mealId));
    }
}
