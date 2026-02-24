import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { DailyService } from './daily.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';

@ApiTags('Daily')
@ApiBearerAuth()
@Controller('daily')
export class DailyController {
    constructor(
        private readonly dailyService: DailyService
    ) { }

    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Post()
    @ApiOperation({ summary: 'Criar registro diario' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['data'],
            properties: {
                data: {
                    type: 'object',
                    required: ['date', 'userId'],
                    properties: {
                        date: { type: 'string', example: '2026-02-24' },
                        userId: { type: 'number', example: 1 },
                    },
                },
            },
        },
    })
    async createDaily(@Body('data') data: { date: string, userId: number }) {
        return await this.dailyService.createDaily(data);
    }

    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Get()
    @ApiOperation({ summary: 'Buscar diario por data e usuario' })
    @ApiQuery({ name: 'date', type: String, example: '2026-02-24' })
    @ApiQuery({ name: 'userId', type: Number, example: 1 })
    async getDailyByDateAndUserId(@Query('date') date: string, @Query('userId') userId: string) {
        return await this.dailyService.findDailyByDateAndUserId({ date: date, userId: Number(userId) });
    }

    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Get(':userId')
    @ApiOperation({ summary: 'Listar todos os diarios de um usuario' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    async getAllDailiesByUser(@Param('userId') userId: number) {
        return await this.dailyService.findAllDailyByUserId(Number(userId));
    }
}
