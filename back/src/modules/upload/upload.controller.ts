import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}


    @Post()
    @ApiResponse({
      status: 201,
    })
    @UseInterceptors(FileInterceptor('file'))
    UploadFile(@UploadedFile() file: Express.Multer.File) {
             
            console.log(file)
    }
  
  
}
