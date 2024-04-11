import { Controller, Delete, Get, Param } from '@nestjs/common';
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

  @Delete(':id')
  @ApiOperation({
    summary: 'удалить картинку'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: String
  })
  delete(@Param() param: {id: string}): Promise<string> {
  
   return this.imagesService.deleteImage(+param.id)
  }


}
