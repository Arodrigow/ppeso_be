import { Controller, Get, Param } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService

    ){}

    @Get(':mealId')
    findItemsOfMeals(@Param('mealId') mealId: number) {
        return this.itemService.findItemsOfMeals(mealId);
    }
}
