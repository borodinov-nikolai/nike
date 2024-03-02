import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DbModule } from 'src/db/db.module';
import { FileModule } from 'src/file/file.module';

@Module({
  imports: [DbModule, FileModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
