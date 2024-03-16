import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { AddProductDto, DeleteProductDto} from './dtos/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'configs/multer.config';

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
  getAll(@Query() query): Promise<Product[]> {
    console.log(query)
    return this.productsService.findAll(query);
  } 

  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  @ApiOperation({
    summary: 'добавить продукт',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  addProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: AddProductDto,
  ) {
    const image = file.filename;
    const { name, price, categoryId } = body;
    return this.productsService.create({ name, price: Number(price), image, categoryId});
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
  removeProduct(@Body() body: DeleteProductDto) {
    return this.productsService.delete(body.id);
  }
}
