import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SizesService } from './sizes.service';
import { AddSizeDto, DeleteSizeDto } from './dtos';
import { Size } from './entities';

@ApiTags('sizes')
@Controller('sizes')
export class SizesController {
  constructor(private readonly sizesService: SizesService) {}

  
  @Post()
  @ApiOperation({
    summary: 'добавить размер',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Size,
  })
  createCategory(@Body() body: AddSizeDto) {
    return this.sizesService.create(body)
  }

  @Get()
  @ApiOperation({
    summary: 'получить размер'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Size
  })
  getCategories() {
     return this.sizesService.findAll()
  }

  @Delete()
  @ApiOperation({
    summary: 'удалить размер'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: String
  })

  deleteCategory(@Body() body: DeleteSizeDto) {
        return this.sizesService.delete(body.id)
  }


}
