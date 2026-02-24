import { Body, Controller, Get, Param, Post, Put, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiParam,
    ApiTags,
    ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    @ApiOperation({ summary: 'Criar novo usuario' })
    @ApiBody({
        schema: {
            type: 'object',
            required: ['captchaToken'],
            additionalProperties: true,
            properties: {
                captchaToken: { type: 'string', example: '03AFcWe...' },
            },
        },
    })
    @ApiUnauthorizedResponse({ description: 'Falha na validacao do reCAPTCHA' })
    async createUser(@Body() data: any) {
        const { captchaToken, ...userData } = data;

        const validCaptcha = await this.userService.validateRecaptcha(captchaToken);

        if (!validCaptcha) {
            throw new UnauthorizedException('Verificação do reCAPTCHA falhou.');
        }

        return await this.userService.createUser(userData);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Buscar usuario por ID' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    async getUser(@Param('userId') id: string) {
        return await this.userService.getUserById(Number(id));
    }

    @UseGuards(JwtAuthGuard)
    @Put(':userId')
    @ApiBearerAuth()
    @ApiOperation({ summary: 'Atualizar dados do usuario' })
    @ApiParam({ name: 'userId', type: Number, description: 'ID do usuario' })
    @ApiBody({
        schema: {
            type: 'object',
            additionalProperties: true,
        },
    })
    async updateUser(@Param('userId') id: string, @Body() data: Prisma.UserUpdateInput) {
        return await this.userService.updateUser(Number(id), data);
    }
}
