import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PesohistoricoService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    createPesohistorico(data: Prisma.PesoHistoricoCreateInput) {
        return this.prisma.pesoHistorico.create({
            data
        });
    }

    getPesoHistoricosByUserId(userId: number) {
        return this.prisma.pesoHistorico.findMany({
            where: {
                userId
            }
        });
    }

    deletePesohistorico(id: number) {
        return this.prisma.pesoHistorico.delete({
            where: {
                id
            }
        });
    }
}
