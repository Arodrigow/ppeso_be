import { Module } from '@nestjs/common';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { DailyModule } from '@/daily/daily.module';

@Module({
  imports: [PrismaModule, DailyModule],
  providers: [MealService],
  exports: [MealService],
  controllers: [MealController]
})
export class MealModule {}
