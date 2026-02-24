import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PesohistoricoService } from './pesohistorico.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserMatchGuard } from '@/auth/user-auth.guard';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Peso')
@ApiBearerAuth()
@Controller('peso')
export class PesohistoricoController {
    constructor(
        private readonly pesoService: PesohistoricoService
    ) { }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Post(':userId')
    @ApiOperation({ summary: 'Criar registro de peso historico' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiBody({
        schema: {
            type: 'object',
            additionalProperties: true,
        },
    })
    async createPesohistorico(@Param('userId') userId: string, @Body() data: Prisma.PesoHistoricoCreateInput) {
        return await this.pesoService.createPesohistorico(Number(userId), data);
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Get(':userId')
    @ApiOperation({ summary: 'Listar historico de peso por usuario' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    async getPesoHistoricosByUserId(@Param('userId') userId: string) {
        return await this.pesoService.getPesoHistoricosByUserId(Number(userId));
    }

    @UseGuards(JwtAuthGuard,UserMatchGuard)
    @Delete(':userId/:id')
    @ApiOperation({ summary: 'Excluir registro de peso historico' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiParam({ name: 'id', type: Number, description: 'ID do registro de peso' })
    async deletePesohistorico(@Param('userId') userId: string, @Param('id') id: string) {
        return await this.pesoService.deletePesohistorico(Number(userId), Number(id));
    }
}
