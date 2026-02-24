import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { RolesGuard } from '@/auth/roles/roles.guard';
import { Roles } from '@/auth/roles/roles.decorator';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Invitation')
@ApiBearerAuth()
@Controller('invitation')
export class InvitationController {
    constructor(
        private readonly invitation: InvitationService
    ) { }

    @UseGuards(JwtAuthGuard, RolesGuard, UserMatchGuard)
    @Roles(Role.ADMIN)
    @Post(':userId')
    @ApiOperation({ summary: 'Criar convite (apenas ADMIN)' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario admin' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['email'],
            properties: {
                email: { type: 'string', example: 'novo.usuario@example.com' },
            },
        },
    })
    async createInvitation(@Body() data: Prisma.InvitationCreateInput) {
        return await this.invitation.createInvitation(data.email);
    }

    @UseGuards(JwtAuthGuard, RolesGuard, UserMatchGuard)
    @Roles(Role.ADMIN)
    @Put(":userId/:token")
    @ApiOperation({ summary: 'Marcar convite como utilizado (apenas ADMIN)' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario admin' })
    @ApiParam({ name: 'token', type: String, description: 'Token do convite' })
    async markInvitationAsUsed(@Param('token') token: string) {
        return await this.invitation.markInvitationAsUsed(token);
    }

    @UseGuards(JwtAuthGuard, RolesGuard, UserMatchGuard)
    @Roles(Role.ADMIN)
    @Get(":userId")
    @ApiOperation({ summary: 'Listar convites nao utilizados (apenas ADMIN)' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario admin' })
    async getAllUnusedInvitation() {
        return await this.invitation.getAllUnusedInvitation();
    }
}
