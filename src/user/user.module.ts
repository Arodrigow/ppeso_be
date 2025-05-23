import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '@/prisma/prisma.module';
import { InvitationModule } from '@/invitation/invitation.module';

@Module({
  imports:[PrismaModule, InvitationModule],
  providers: [UserService],
  controllers: [UserController],
  exports:[UserService]
})
export class UserModule {}
