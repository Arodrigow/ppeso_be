import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUserById(Number(id));      
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() data: Prisma.UserUpdateInput) {
        return this.userService.updateUser(Number(id), data);
    }
}
