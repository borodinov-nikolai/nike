import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';
import { AddCategoryDto, DeleteCategoryDto } from './dtos/category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  
  @Post()
  @ApiOperation({
    summary: 'добавить категорию',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Category,
  })
  createCategory(@Body() body: AddCategoryDto) {
    return this.categoriesService.create(body)
  }

  @Get()
  @ApiOperation({
    summary: 'получить категории'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Category
  })
  getCategories() {
     return this.categoriesService.findAll()
  }

  @Get(":id")
  @ApiOperation({
    summary: 'Получить категорию'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Category
  })
  getOne(@Param('id') id: string): Promise<Category> {
   return this.categoriesService.findOne(+id)
  }

  @Put(":id")
  @ApiOperation({
    summary: 'Изменить категорию'
  })
  @ApiResponse({
    status: 200,
    description: 'Успешно',
    type: Category
  })
  update(@Param('id') id: string, @Body() body: AddCategoryDto):Promise<Category> {
       return this.categoriesService.update(+id, body)
  }

  @Delete()
  @ApiOperation({
    summary: 'удалить категорию'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: String
  })

  deleteCategory(@Body() body: DeleteCategoryDto) {
        return this.categoriesService.delete(body.id)
  }


}

