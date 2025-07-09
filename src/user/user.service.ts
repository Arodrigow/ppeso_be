import { PrismaService } from '@/prisma/prisma.service';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bc from 'bcrypt';
import { Prisma, User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
import { InvitationService } from '@/invitation/invitation.service';
import axios from 'axios';

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly configService: ConfigService,
        private readonly invitationService: InvitationService
    ) { }


    async createUser(data: Prisma.UserCreateInput): Promise<User> {

        await this.signup({ email: data.email, token: data.token })

        const saltRounds = this.configService.get<string>('HASH_SALTROUNDS');
        if (!saltRounds) {
            throw new NotFoundException('Salt rounds not defined in config');
        }

        const { password, ...rest } = data;
        if (!password) {
            throw new BadRequestException('Password is required');
        }

        try {
            const salt = await bc.genSalt(parseInt(saltRounds, 10));
            const hashedPassword = await bc.hash(password, salt);

            const user = await this.prisma.user.create({
                data: {
                    ...rest,
                    password: hashedPassword,
                },
            });
            await this.invitationService.markInvitationAsUsed(data.token);
            return user;
        } catch (err) {
            throw new BadRequestException('Error creating user: ' + err.message);
        }
    }

    async signup(data: { email: string, token: string }) {
        const { email, token } = data;
        if (!token)
            throw new BadRequestException('Um convite é necessário.')

        const invitation = await this.invitationService.findInvitationByToken(token);

        if (!invitation || invitation.used || invitation.email !== email) {
            throw new BadRequestException('Convite já usado ou inválido.');
        }
    }

    async getUserById(id: number) {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    id
                }
            });
        } catch (error) {
            throw new BadRequestException('Erro ao encontrar usuário: ', error)
        }
    }

    async getUserByEmail(email: string) {
        try {
            return await this.prisma.user.findUnique({
                where: {
                    email
                }
            })

        } catch (error) {
            throw new BadRequestException('Erro ao encontrar usuário por email: ', error)
        }
    }

    async updateUser(id: number, data: Prisma.UserUpdateInput) {
        try {
            return await this.prisma.user.update({
                where: {
                    id
                },
                data
            });
        } catch (error) {
            throw new BadRequestException('Erro ao atualizar usuário: ', error)
        }
    }

    async validateRecaptcha(token: string): Promise<boolean> {
        const secret = process.env.RECAPTCHA_SECRET_KEY;

        if (!secret) {
            throw new InternalServerErrorException('reCAPTCHA secret key is not configured');
        }
        try {
            const { data } = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify`,
                new URLSearchParams({
                    secret,
                    response: token,
                }).toString(),
                { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
            );

            return data.success; // For reCAPTCHA v2, just check success
        } catch (e) {
            console.error('reCAPTCHA error:', e);
            return false;
        }
    }
}
