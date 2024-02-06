import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService ,
  ) {}

   async signUp(body: AuthDto, res:Response) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);
    const user = await this.usersService.createUser({ ...body, password: hash });
    const payload = {id: String(user.id), email: user.email}
     const token = await this.jwtService.signAsync(payload, {secret: process.env.JWT_SECRET})
    res.cookie('jwt', token, {httpOnly: true, maxAge: 24*60*60*1000});
    return user;

  }

  async signIn(body: AuthDto, res:Response) {
    const user = await this.usersService.getUser(body.email);
    if (!user) {
      throw new NotFoundException('user with this email not found');
    }

    const passwordCheck = bcrypt.compareSync(body.password, user.password);

    if (!passwordCheck) {
      throw new UnauthorizedException('wrong password');
    }


    const payload = {id: user.id, email: user.email}
    const token = await this.jwtService.signAsync(payload, {secret: process.env.JWT_SECRET})
    res.cookie('jwt', token, {httpOnly: true, maxAge: 24*60*60*1000})

    return user;
  }
}
