import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dtos/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  signUp(body: AuthDto) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);
    return this.usersService.createUser({ email: body.email, password: hash });
  }

  async signIn(body: AuthDto) {
    const user = await this.usersService.getUser(body.email);
    if (!user) {
      throw new NotFoundException('user with this email not found');
    }

    const passwordCheck = bcrypt.compareSync(body.password, user.password);

    if (!passwordCheck) {
      throw new UnauthorizedException('wrong password');
    }

    return user;
  }
}
