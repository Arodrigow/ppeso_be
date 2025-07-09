import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import sanitizeUser from '@/utils/sanitizeUser';
import axios from 'axios';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService) { }

    async validateUser(email: string, pass: string): Promise<any> {
        try {

            const user = await this.userService.getUserByEmail(email);
            if (user && await bcrypt.compare(pass, user.password)) {
                const { password, ...result } = user;
                return result;
            }
            return null;
        } catch (err) {
            throw new InternalServerErrorException('Erro na validação de usuário', err);
        }
    }

    async login(user: any) {
        try {
            const payload = { username: user.email, sub: user.id, role: user.role };
            return {
                user: sanitizeUser(user),
                access_token: this.jwtService.sign(payload, {
                    expiresIn: '30d',
                }),
            };
        } catch (err) {
            throw new InternalServerErrorException('Erro na validação de usuário', err);
        }
    }

    async validateRecaptcha(captchaToken: string): Promise<boolean> {
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        
        if (!secret) {
            throw new InternalServerErrorException('reCAPTCHA secret key is not configured');
        }
        try {
            const { data } = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify`,
                new URLSearchParams({
                    secret,
                    response: captchaToken,
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
