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
    @Post(':userId')
    async createInvitation(@Body() data: Prisma.InvitationCreateInput) {
        return await this.invitation.createInvitation(data.email);
    }

    @UseGuards(JwtAuthGuard, RolesGuard,UserMatchGuard)
    @Roles(Role.ADMIN)
    @Put(":userId/:token")
    async markInvitationAsUsed(@Param('token') token: string) {
        return await this.invitation.markInvitationAsUsed(token);
    }
}
