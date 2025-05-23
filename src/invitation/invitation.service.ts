import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
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

        await this.prisma.invitation.create({
            data: {
                email,
                token: str,
            },
        });

        return str;
    }

    async findInvitationByToken(token: string) {
        const invitation = await this.prisma.invitation.findUnique({
            where: {
                token
            }
        })
        return invitation;
    }

    async markInvitationAsUsed(token: string) {
       await this.prisma.invitation.update({
            where: {
                token
            },
            data: {
                used: true
            }
        })
    }



}
