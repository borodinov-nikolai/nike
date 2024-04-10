import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from './entities/image.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('images')
@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Get()
  @ApiOperation({
    summary: 'получить кратинки'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Image
  })
  getAll(): Promise<Image[]> {
   return this.imagesService.getAll()
  }
}
