import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { AddProductDto, UpdateProductDto} from './dtos/product.dto';
import { AnyFilesInterceptor} from '@nestjs/platform-express';
import { extname } from 'path';
import * as fs from 'fs'


@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: 'получить все продукты',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  getAll(@Query() query): Promise<{products: Product[], totalCount: number}> {
    return this.productsService.findAll(query);
  } 

  @Get(':id')
  @ApiOperation({
    summary: 'получить один продукт',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  getOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(Number(id));
  } 


  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: 'добавить продукт',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  addProduct(
    @Body() body: AddProductDto,
  ) {
    return this.productsService.create(body);
  }


  @Put(':id')
  @UseInterceptors(AnyFilesInterceptor())
  @ApiOperation({
    summary: 'изменить продукт',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  updateProduct(
    @Body() body: UpdateProductDto,
    @Param('id') id: string
  ) {

    return this.productsService.update(+id, body);
  }


  @Delete()
  @ApiOperation({
    summary: 'удалить продукт',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  removeProduct(@Body() body: {id:number}) {
    return this.productsService.delete(body.id);
  }
}
