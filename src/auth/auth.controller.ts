import { Controller, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {

        // const { captchaToken } = req.body

        // // const validCaptcha = await this.authService.validateRecaptcha(captchaToken);

        // // if (!validCaptcha) {
        // //     throw new UnauthorizedException('reCAPTCHA inválido');
        // // }
        
        const resp = this.authService.login(req.user);
        return resp
    }
}