import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { DailyService } from './daily.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('daily')
export class DailyController {
    constructor(
        private readonly dailyService: DailyService
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    getDailyByUserId(@Body('data') data: { date: string, userId: number }) {
        return this.dailyService.createDaily(data);
    }

    @Get()
    getDailyByDateAndUserId(@Query('date') date: string, @Query('userId') userId: string) {
        return this.dailyService.findDailyByDateAndUserId({ date: date, userId: Number(userId) });
    }
    
}
