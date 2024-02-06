import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";




@Injectable()
export class AuthGuard implements CanActivate {
   constructor(private jwtService: JwtService){}

  async canActivate(context: ExecutionContext): Promise<boolean> {
        const requset:Request = context.switchToHttp().getRequest();
        const token = requset.cookies.jwt
         
        if(!token){
            throw new UnauthorizedException('access denided')
        }

        try{
            this.jwtService.verify(token, {secret: process.env.JWT_SECRET})
        } catch {
            throw new UnauthorizedException('access denided')
        }

        return true
   }
}