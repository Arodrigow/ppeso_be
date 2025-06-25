import { BadRequestException, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        try {
            await this.$connect();

        } catch (error) {
            throw new BadRequestException('Erro ao conectar com banco de dados: ', error)
        }
    }
    async onModuleDestroy() {
        try {
            await this.$disconnect();
        } catch (error) {
            throw new BadRequestException('Erro ao desconectar com banco de dados: ', error)
        }
    }
}
