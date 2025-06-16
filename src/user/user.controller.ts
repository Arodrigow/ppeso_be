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
    createUser(@Body() data: Prisma.UserCreateInput){
        return this.userService.createUser(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':userId')
    getUser(@Param('userId') id: string) {
        return this.userService.getUserById(Number(id));      
    }

    @UseGuards(JwtAuthGuard)
    @Put(':userId')
    updateUser(@Param('userId') id: string, @Body() data: Prisma.UserUpdateInput) {
        return this.userService.updateUser(Number(id), data);
    }
}
