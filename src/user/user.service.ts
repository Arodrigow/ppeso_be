import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService
    ){}
    
    getUserById(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            }
        });
    }

    updateUser(id: number, data: Prisma.UserUpdateInput) {
        return this.prisma.user.update({
            where: {
                id
            },
            data
        });
    }
}
