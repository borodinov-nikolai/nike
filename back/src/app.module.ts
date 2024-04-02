import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './modules/db/db.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AccountModule } from './modules/account/account.module';
import { ProductsModule } from './modules/products/products.module';
import { MulterModule } from '@nestjs/platform-express';
import { multerConfig } from 'src/configs/multer.config';
import { FileModule } from './modules/file/file.module';
import { jwtConfig } from 'src/configs/jwt.config';
import { staticConfig } from 'src/configs/static.config';
import { CategoriesModule } from './modules/categories/categories.module';
import { SizesModule } from './modules/sizes/sizes.module';
import { ColorsModule } from './modules/colors/colors.module';
import { MaterialsModule } from './modules/materials/materials.module';

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
    SizesModule,
    ColorsModule,
    MaterialsModule
  ],
  controllers: [],
  exports: [],
})
export class AppModule {}
