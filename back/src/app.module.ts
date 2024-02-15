import { JwtModule} from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AccountModule } from './account/account.module';





@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
  }),JwtModule.register({
    global: true, 
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '1d'}
  }), 
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '/build'),
    serveRoot: '/',
    exclude: ['/api/(.*)'],
  }),
  DbModule, UsersModule, AuthModule, DashboardModule, AccountModule],
  controllers: [],
  exports: []
})
export class AppModule {}
