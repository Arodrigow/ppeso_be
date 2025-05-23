import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles/roles.guard';
import { Roles } from '@/auth/roles/roles.decorator';

@Controller('invitation')
export class InvitationController {
    constructor(
        private readonly invitation: InvitationService
    ){}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @Post()
    createInvitation(@Body() data: Prisma.InvitationCreateInput){
        return this.invitation.createInvitation(data.email);
    }
}
