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
import { ProductsModule } from './products/products.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { multerConfig } from 'configs/multer.config';





@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`
  }),JwtModule.register({
    global: true, 
    secret: process.env.JWT_SECRET,
    signOptions: {expiresIn: '1d'}
  }), 
  MulterModule.register(multerConfig),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '..' ,'uploads'),
    // serveRoot: '/',  
    // exclude: ['/api/(.*)'],
  }),
  DbModule, UsersModule, AuthModule, DashboardModule, AccountModule, ProductsModule],
  controllers: [],
  exports: []
})
export class AppModule {}
