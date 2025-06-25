import { PrismaService } from '@/prisma/prisma.service';
import { UserService } from '@/user/user.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class PesohistoricoService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly user: UserService
    ) { }

    async createPesohistorico(userId: number, data: Prisma.PesoHistoricoCreateInput) {
        try {
            const newPeso = await this.prisma.pesoHistorico.create({
                data
            });

            const mostRecentPeso = await this.getLastestPeso(userId)
            await this.user.updateUser(userId, { peso_now: mostRecentPeso?.peso })

            return newPeso;
        } catch (error) {
            throw new BadRequestException('Erro ao criar novo peso: ', error)
        }
    }

    async getPesoHistoricosByUserId(userId: number) {
        try {

            return await this.prisma.pesoHistorico.findMany({
                where: {
                    userId
                }
            });
        } catch (error) {
            throw new BadRequestException('Erro ao listar pesos do usuário: ', error)
        }
    }

    async deletePesohistorico(id: number) {
        try {

            return await this.prisma.pesoHistorico.delete({
                where: {
                    id
                }
            });
        } catch (error) {
            throw new BadRequestException('Erro ao deletar peso: ', error)
        }
    }

    async getLastestPeso(id: number) {
        try {
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

        } catch (error) {
            throw new BadRequestException('Erro ao encontrar ultimo peso: ', error)
        }
    }
}
