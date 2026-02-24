import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ItemService } from './item.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Item')
@ApiBearerAuth()
@Controller('item')
export class ItemController {

    constructor(
        private readonly itemService: ItemService

    ){}

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post(':userId')
    @ApiOperation({ summary: 'Criar item de refeicao' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['data'],
            properties: {
                data: {
                    type: 'object',
                    additionalProperties: true,
                },
            },
        },
    })
    async createItem(@Body('data') data: Prisma.ItemCreateManyInput){
        return await this.itemService.createItem(data);
    }
    
    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId/:mealId')
    @ApiOperation({ summary: 'Listar itens de uma refeicao' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiParam({ name: 'mealId', type: Number, description: 'ID da refeicao' })
    async findItemsOfMeals(@Param('mealId') mealId: string) {
        return await this.itemService.findItemsOfMeals(Number(mealId));
    }
}
