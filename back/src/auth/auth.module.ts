import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DbModule } from 'src/db/db.module';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TokenService } from './token.service';
import { RolesGuard } from './roles.guard';


@Module({
  imports: [DbModule, UsersModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
  exports: [TokenService]
})
export class AuthModule {}
