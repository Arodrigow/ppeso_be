import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ItemService],
  exports: [ItemService],

})
export class ItemModule {}
