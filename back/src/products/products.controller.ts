import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { ProductDto } from './dtos/product.dto';
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
    @Body() body: ProductDto,
  ) {
    const image = file.filename;
    const { name, price } = body;
    return this.productsService.create({ name, price: Number(price), image });
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
  removeProduct(@Body() body: { id: number }) {
    return this.productsService.delete(body.id);
  }
}
