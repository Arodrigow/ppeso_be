import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PesohistoricoService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly user: UserService
    ) { }

    async createPesohistorico(userId: number, data: Prisma.PesoHistoricoCreateInput) {
        const newPeso = await this.prisma.pesoHistorico.create({
            data
        });

        const mostRecentPeso = await this.getLastestPeso(userId)
        await this.user.updateUser(userId, { peso_now: mostRecentPeso?.peso })

        return newPeso;
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

    async getLastestPeso(id: number) {
        return await this.prisma.pesoHistorico.findFirst(
            {
                where: {
                    userId: id,
                },
                orderBy: {
                    data: 'desc',
                },
            }
        )
    }
}
