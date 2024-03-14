import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AccountModule } from './account/account.module';
import { ProductsModule } from './products/products.module';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from 'configs/multer.config';
import { FileModule } from './file/file.module';
import { jwtConfig } from 'configs/jwt.config';
import { staticConfig } from 'configs/static.config';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    JwtModule.register(jwtConfig),
    MulterModule.register(multerConfig),
    ServeStaticModule.forRoot(staticConfig),
    DbModule,
    UsersModule,
    AuthModule,
    DashboardModule,
    AccountModule,
    ProductsModule,
    FileModule,
    CategoriesModule,
  ],
  controllers: [],
  exports: [],
})
export class AppModule {}
