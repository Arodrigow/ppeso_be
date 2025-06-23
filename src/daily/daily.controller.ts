import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { DailyService } from './daily.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';

@Controller('daily')
export class DailyController {
    constructor(
        private readonly dailyService: DailyService
    ){}

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post()
    async getDailyByUserId(@Body('data') data: { date: string, userId: number }) {
        return await this.dailyService.createDaily(data);
    }

    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Get()
    async getDailyByDateAndUserId(@Query('date') date: string, @Query('userId') userId: string) {
        return await this.dailyService.findDailyByDateAndUserId({ date: date, userId: Number(userId) });
    }
        
    @UseGuards(JwtAuthGuard, UserMatchGuard)
    @Get(':userId')
    async getAllDailiesByUser(@Param('userId') userId: number){
        return await this.dailyService.findAllDailyByUserId(userId);
    }
}
