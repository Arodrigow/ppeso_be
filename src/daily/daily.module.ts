import { Module } from '@nestjs/common';
import { DailyService } from './daily.service';
import { DailyController } from './daily.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DailyService],
  controllers: [DailyController],
  exports:[DailyService]
})
export class DailyModule {}
