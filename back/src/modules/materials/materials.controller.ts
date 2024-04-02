import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Material } from './entities';
import { AddMaterialDto} from './dtos/material.dto';

@ApiTags('materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  @ApiOperation({
    summary: 'Добавить материал'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Material
  })
  createColor(@Body() body: AddMaterialDto): Promise<Material> {
         return this.materialsService.create(body)
  }

  @Get()
  @ApiOperation({
    summary: 'Получить все материалы'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Material
  })
  getAll(): Promise<Material[]> {
    return this.materialsService.findAll()
  }

  @Get(":id")
  @ApiOperation({
    summary: 'Получить материал'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Material
  })
  getOne(@Param('id') id: string): Promise<Material> {
   return this.materialsService.findOne(+id)
  }

  @Put(":id")
  @ApiOperation({
    summary: 'Изменить материал'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Material
  })
  update(@Param('id') id: string, @Body() body: AddMaterialDto):Promise<Material> {
       return this.materialsService.update(+id, body)
  }

  @Delete()
  @ApiOperation({
    summary: 'Удалить материал'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Material
  })
  delete(@Body() body: {id: number}): Promise<string> {
    return this.materialsService.delete(body.id)
  }
}
