import { Body, Controller, Delete, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { ProductDto } from './dtos/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('products')


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({
    summary: 'получить все продукты'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product
  })
  getAll():Promise<Product[]> {
     return this.productsService.findAll()
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
  @ApiOperation({
    summary: 'добавить продукт'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product
  })
  addProduct(@Body() body: ProductDto):Promise<Product> {
    delete body.file
    return this.productsService.create(body)
  }

  @Delete()
  @ApiOperation({
    summary: 'удалить продукт'
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product
  })
  removeProduct(@Body() body: {id:number}) {
    return this.productsService.delete(body.id)
  }
}
