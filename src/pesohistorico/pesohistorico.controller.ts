import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PesohistoricoService } from './pesohistorico.service';
import { Prisma } from '@prisma/client';

@Controller('peso')
export class PesohistoricoController {
    constructor(
        private readonly pesoService: PesohistoricoService
    ){}

    @Post()
    createPesohistorico(@Body() data: Prisma.PesoHistoricoCreateInput) {
        return this.pesoService.createPesohistorico(data);
    }

    @Get(':userId')
    getPesoHistoricosByUserId(@Param('userId') userId: string) {
        return this.pesoService.getPesoHistoricosByUserId(Number(userId));
    }

    @Delete(':id')
    deletePesohistorico(@Param('id') id: string) {
        return this.pesoService.deletePesohistorico(Number(id));
    }
}
