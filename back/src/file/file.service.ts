import { Injectable } from '@nestjs/common';
import { FilePathService } from './file-path.service';
import * as fs from 'fs';
@Injectable()
export class FileService {
  constructor(readonly filePathService: FilePathService) {}

  async deleteFile(fileName: string, category: string): Promise<void> {
    const filePath = this.filePathService.getFile(fileName, category);
    await fs.promises.unlink(filePath);
  }
}
