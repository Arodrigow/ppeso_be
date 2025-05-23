import { Body, Controller, Post } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { Prisma } from '@prisma/client';

@Controller('invitation')
export class InvitationController {
    constructor(
        private readonly invitation: InvitationService
    ){}

    @Post()
    createInvitation(@Body() data: Prisma.InvitationCreateInput){
        return this.invitation.createInvitation(data.email);
    }
}
