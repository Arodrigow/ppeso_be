import { Module } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { InvitationController } from './invitation.controller';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [InvitationService],
  controllers: [InvitationController],
  exports:[InvitationService]
})
export class InvitationModule {}
