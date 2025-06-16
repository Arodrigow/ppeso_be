import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class UserMatchGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authenticatedUserId = request.user?.id;
    const paramUserId =  Number(request.params.userId ?? request.query.userId ?? request.body.userId);

    if (authenticatedUserId !== paramUserId) {
      throw new ForbiddenException('You are not authorized to access this resource.');
    }

    return true;
  }
}