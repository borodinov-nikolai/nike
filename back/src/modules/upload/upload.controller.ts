import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}


    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async UploadFile(@UploadedFile() file) {
             console.log(file)
    }
  
  
}
