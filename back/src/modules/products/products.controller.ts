import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { AddProductDto, UpdateProductDto} from './dtos/product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/configs/multer.config';

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
    delete body.image
    return this.productsService.create({image, ...body});
  }


  @Put(':id')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  @ApiOperation({
    summary: 'изменить продукт',
  })
  @ApiResponse({
    status: 200,
    description: 'успешно',
    type: Product,
  })
  updateProduct(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UpdateProductDto,
    @Param('id') id: string
  ) {
      const image = file && file.filename;
      delete body.image
    return this.productsService.update(Number(id), {image, ...body});
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
