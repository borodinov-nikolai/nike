import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DbModule } from 'src/modules/db/db.module';
import { FileModule } from 'src/modules/file/file.module';

@Module({
  imports: [DbModule, FileModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
