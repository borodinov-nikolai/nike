import { Module } from '@nestjs/common';
import { SizesService } from './sizes.service';
import { SizesController } from './sizes.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [SizesController],
  providers: [SizesService],
})
export class SizesModule {}
