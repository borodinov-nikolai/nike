import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Roles } from './roles.decorator';
import { TokenService } from './token.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requset: Request = context.switchToHttp().getRequest();
    const roles = this.reflector.get(Roles, context.getHandler());

    if (!roles) {
      return false;
    }

    if (roles.includes('ALL')) {
      return true;
    }

    const authorizationHeader = requset.headers['authorization'];
    if (!authorizationHeader) {
      throw new UnauthorizedException();
    }

    const accessToken = authorizationHeader.split(' ')[1];

    try {
      await this.tokenService.verifyToken(accessToken);
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    const payload = await this.tokenService.decodeToken(accessToken);

    if (roles.includes(payload.role)) {
      return true;
    }

    return false;
  }
}
