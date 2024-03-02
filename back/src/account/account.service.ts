import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { editProfileDto } from './dtos/editProfile.dto';
import { Request } from 'express';
import { TokenService } from 'src/auth/token.service';

@Injectable()
export class AccountService {
  constructor(
    private usersService: UsersService,
    private tokenService: TokenService,
  ) {}

  async editProfile({ body, req }: { body: editProfileDto; req: Request }) {
    const token = req.cookies.jwt;
    const { id } = await this.tokenService.decodeToken(token);
    await this.usersService.updateUser({ data: body, id });
    return 'ok';
  }
}
