import { Module } from '@nestjs/common';
import { PesohistoricoService } from './pesohistorico.service';
import { PesohistoricoController } from './pesohistorico.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  providers: [PesohistoricoService],
  controllers: [PesohistoricoController]
})
export class PesohistoricoModule {}
