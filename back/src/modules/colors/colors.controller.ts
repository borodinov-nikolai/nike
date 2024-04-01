import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Color } from './entities';
import { colorDto } from './dtos/color.dto';

@ApiTags('colors')
@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Post()
  @ApiOperation({
    summary: 'Добавить цвет'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Color
  })
  createColor(@Body() body: colorDto): Promise<Color> {
         return this.colorsService.create(body)
  }

  @Get()
  @ApiOperation({
    summary: 'Получить все цвета'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Color
  })
  getAll(): Promise<Color[]> {
    return this.colorsService.findAll()
  }

  @Delete()
  @ApiOperation({
    summary: 'Удалить цвет'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Color
  })
  delete(@Body() body: {id: number}): Promise<string> {
    return this.colorsService.delete(body.id)
  }
}
