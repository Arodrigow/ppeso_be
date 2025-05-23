import { Module } from '@nestjs/common';
import { PesohistoricoService } from './pesohistorico.service';
import { PesohistoricoController } from './pesohistorico.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PesohistoricoService],
  controllers: [PesohistoricoController]
})
export class PesohistoricoModule {}
