import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';
import base64url from 'base64url';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InvitationService {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async createInvitation(email: string) {
        const token = uuidv4();
        const hexStringUndecorated = token.replace(/-/g, "");
        const buffer = Buffer.from(hexStringUndecorated, "hex");
        const str = base64url(buffer);

        const invitation = await this.findInvitationByEmail(email)
        if (invitation?.token && !invitation.used) {
            throw new BadRequestException('Convite ativo para este email já existe. Token: ' + invitation.token)
        }

        try {
            await this.prisma.invitation.create({
                data: {
                    email,
                    token: str,
                },
            });

            return str;
        } catch (error) {
            throw new BadRequestException('Erro ao criar convite: ', error)
        }

    }

    async findInvitationByToken(token: string) {
        try {
            const invitation = await this.prisma.invitation.findUnique({
                where: {
                    token
                }
            })
            return invitation;
        } catch (error) {
            throw new BadRequestException('Erro ao encontrar convite pelo token: ', error)
        }
    }

    async findInvitationByEmail(email: string) {
        try {
            const invitation = await this.prisma.invitation.findUnique({
                where: {
                    email,
                }
            })
            return invitation;

        } catch (error) {
            throw new BadRequestException('Erro ao encontrar convite pelo email: ', error)
        }
    }

    async markInvitationAsUsed(token: string) {
        try {

            await this.prisma.invitation.update({
                where: {
                    token
                },
                data: {
                    used: true
                }
            })
        } catch (error) {
            throw new BadRequestException('Erro ao atualizar o convite como usado: ', error)
        }
    }

    async getAllUnusedInvitation() {
        try {

            await this.prisma.invitation.findMany({
                where: {
                    used: false
                },
            })
        } catch (error) {
            throw new BadRequestException('Erro ao listar todos os convites não usados: ', error)
        }
    }
}
