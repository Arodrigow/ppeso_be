import { Controller, InternalServerErrorException, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {

        const { captchaToken } = req.body
        console.log("Body: ", req.body)
        console.log("token: " + captchaToken);
        const validCaptcha = await this.authService.validateRecaptcha(captchaToken);

        if (!validCaptcha) {
            throw new InternalServerErrorException('reCAPTCHA inválido');
        }
        
        console.log("req.user: ", req.user)
        const resp = this.authService.login(req.user);
        return resp
    }
}