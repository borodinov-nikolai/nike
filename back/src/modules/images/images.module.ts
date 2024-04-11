import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { DbModule } from '../db/db.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [DbModule, FileModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
