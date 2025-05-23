import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PesohistoricoService } from './pesohistorico.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('peso')
export class PesohistoricoController {
    constructor(
        private readonly pesoService: PesohistoricoService
    ){}

    @UseGuards(JwtAuthGuard)
    @Post()
    createPesohistorico(@Body() data: Prisma.PesoHistoricoCreateInput) {
        return this.pesoService.createPesohistorico(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userId')
    getPesoHistoricosByUserId(@Param('userId') userId: string) {
        return this.pesoService.getPesoHistoricosByUserId(Number(userId));
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletePesohistorico(@Param('id') id: string) {
        return this.pesoService.deletePesohistorico(Number(id));
    }
}
