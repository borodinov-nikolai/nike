import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Color } from './entities';
import { AddColorDto} from './dtos/color.dto';

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
  createColor(@Body() body: AddColorDto): Promise<Color> {
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

  @Get(":id")
  @ApiOperation({
    summary: 'Получить цвет'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Color
  })
  getOne(@Param('id') id: string): Promise<Color> {
   return this.colorsService.findOne(+id)
  }

  @Put(":id")
  @ApiOperation({
    summary: 'Изменить цвет'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Color
  })
  update(@Param('id') id: string, @Body() body: AddColorDto):Promise<Color> {
       return this.colorsService.update(+id, body)
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
