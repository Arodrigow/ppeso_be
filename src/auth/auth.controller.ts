import { Controller, Post, Request, UnauthorizedException, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { ApiBody, ApiOperation, ApiUnauthorizedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiOperation({ summary: 'Autenticar usuario e gerar token JWT' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['email', 'password', 'captchaToken'],
            properties: {
                email: { type: 'string', example: 'user@example.com' },
                password: { type: 'string', example: 'secret123' },
                captchaToken: { type: 'string', example: '03AFcWe...' },
            },
        },
    })
    @ApiOkResponse({ description: 'Login realizado com sucesso' })
    @ApiUnauthorizedResponse({ description: 'Credenciais ou captcha invalidos' })
    async login(@Request() req) {

        const { captchaToken } = req.body

        if (captchaToken === process.env.RECAPTCHA_SECRET_BYPASS) {
            const resp = this.authService.login(req.user);
            return resp
        }

        const validCaptcha = await this.authService.validateRecaptcha(captchaToken);

        if (!validCaptcha) {
            throw new UnauthorizedException('reCAPTCHA inválido');
        }

        const resp = this.authService.login(req.user);
        return resp
    }
}
