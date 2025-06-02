import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles/roles.guard';
import { Roles } from '@/auth/roles/roles.decorator';
import { UserMatchGuard } from '@/auth/user-auth.guard';

@Controller('invitation')
export class InvitationController {
    constructor(
        private readonly invitation: InvitationService
    ) { }

    @UseGuards(JwtAuthGuard, RolesGuard,UserMatchGuard)
    @Roles(Role.ADMIN)
    @Post()
    createInvitation(@Body() data: Prisma.InvitationCreateInput) {
        return this.invitation.createInvitation(data.email);
    }

    @UseGuards(JwtAuthGuard, RolesGuard,UserMatchGuard)
    @Roles(Role.ADMIN)
    @Put(":token")
    markInvitationAsUsed(@Param('token') token: string) {
        return this.invitation.markInvitationAsUsed(token);
    }
}
