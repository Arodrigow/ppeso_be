import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    async createUser(@Body() data: Prisma.UserCreateInput){
        return await this.userService.createUser(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userId')
    async getUser(@Param('userId') id: string) {
        return await this.userService.getUserById(Number(id));      
    }

    @UseGuards(JwtAuthGuard)
    @Put(':userId')
    async updateUser(@Param('userId') id: string, @Body() data: Prisma.UserUpdateInput) {
        return await this.userService.updateUser(Number(id), data);
    }
}
