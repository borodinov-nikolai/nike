import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { FileModule } from '../file/file.module';
import { DbModule } from '../db/db.module';

@Module({
  imports: [FileModule, DbModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
