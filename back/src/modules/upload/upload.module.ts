import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { FileModule } from '../file/file.module';
import { DbModule } from '../db/db.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [FileModule, DbModule, MulterModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
