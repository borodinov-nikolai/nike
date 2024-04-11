import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { ApiTags } from '@nestjs/swagger';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/configs/multer.config';
import { Image } from '../images/entities/image.entity';



@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<Image> {
    if(file.mimetype.startsWith('image/')) {
      return this.uploadService.addImage({name: file.filename})
    }
  }
}
