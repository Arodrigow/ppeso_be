import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PesohistoricoService } from './pesohistorico.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';

@Controller('peso')
export class PesohistoricoController {
    constructor(
        private readonly pesoService: PesohistoricoService
    ) { }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post(':userId')
    createPesohistorico(@Param('userId') userId: string, @Body() data: Prisma.PesoHistoricoCreateInput) {
        return this.pesoService.createPesohistorico(Number(userId), data);
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId')
    getPesoHistoricosByUserId(@Param('userId') userId: string) {
        return this.pesoService.getPesoHistoricosByUserId(Number(userId));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Delete(':userId/:id')
    deletePesohistorico(@Param('id') id: string) {
        return this.pesoService.deletePesohistorico(Number(id));
    }
}
