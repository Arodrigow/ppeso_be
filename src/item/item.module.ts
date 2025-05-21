import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { PrismaModule } from '@/prisma/prisma.module';
import { ItemController } from './item.controller';

@Module({
  imports: [PrismaModule],
  providers: [ItemService],
  exports: [ItemService],
  controllers: [ItemController],

})
export class ItemModule {}
