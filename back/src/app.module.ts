import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';




@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
  }), JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions:{
      expiresIn: '7d'
    }
  }), DbModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [],
  exports: []
})
export class AppModule {}
