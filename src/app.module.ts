import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelModule } from './model/model.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ModelModule, PrismaModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
