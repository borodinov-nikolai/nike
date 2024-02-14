import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private tokenService: TokenService
  ) {}

   async signUp(body: AuthDto, res:Response) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);
    const user = await this.usersService.createUser({ ...body, password: hash });
    const {accessToken, refreshToken} = await this.tokenService.generateTokens({id: user.id, role: user.role})
    
    res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 30*24*60*60*1000});
    delete user.role
    return {...user, accessToken}

  }

  async signIn(body: AuthDto, res:Response) {
    const user = await this.usersService.getUserByEmail(body.email);
    if (!user) {
      throw new NotFoundException('user with this email not found');
    }

    const passwordCheck = bcrypt.compareSync(body.password, user.password);

    if (!passwordCheck) {
      throw new UnauthorizedException('wrong password');
    }


    const {accessToken, refreshToken} = await this.tokenService.generateTokens({id: user.id, role: user.role})
    
    res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 30*24*60*60*1000});
    delete user.role
    delete user.password
    return {...user, accessToken};
  }



  async signOut(res: Response) {

    res.clearCookie('jwt')
    return 'signout success'
  }


   async refresh(req: Request, res: Response){
       const accessToken = req.headers['authorization']
       const refreshToken = req.cookies.jwt
       if(!accessToken || !refreshToken) {
        throw new UnauthorizedException()
       }

        try {

          await this.tokenService.verifyToken(refreshToken);
          
        } catch(error) {
          throw new UnauthorizedException(error);
        }

      
       const payload = await this.tokenService.decodeToken(refreshToken);

       const compareResult = await this.tokenService.compareRefreshTokens({userId: payload.id, token: refreshToken});
       


       if(!compareResult){
        throw new UnauthorizedException()
       }

       const {accessToken: freshAccessToken, refreshToken: freshRefreshToken} = await this.tokenService.generateTokens(payload)

       res.cookie('jwt', freshRefreshToken, {httpOnly: true, maxAge: 30*24*60*60*1000});

       return {freshAccessToken}

   }

   async getMe(req: Request) {
       const authorizationHeader = req.headers['authorization'];
       const token = authorizationHeader?.split(' ')[1]

       const payload = await this.tokenService.decodeToken(token);

       return await this.usersService.getUserById(payload.id)

   }

}
