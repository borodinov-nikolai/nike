import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FilePathService } from './file-path.service';

@Module({
  controllers: [FileController],
  providers: [FileService, FilePathService],
  exports: [FileService],
})
export class FileModule {}
