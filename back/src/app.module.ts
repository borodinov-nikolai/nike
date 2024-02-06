import { JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';




@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
  }),JwtModule.register({
    global: true, 
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '1d'}
  }), DbModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
