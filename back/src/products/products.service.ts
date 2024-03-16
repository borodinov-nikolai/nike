import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddProductDto, DeleteProductDto } from './dtos/product.dto';
import { FileService } from 'src/file/file.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private readonly db: DbService,
    private readonly fileService: FileService,
  ) {}

  async findAll(query: any) {
    const {orderBy} = query
    const products = await this.db.product.findMany({
     orderBy
    });
    return products;
  }

  async findOne(id: string) {
    const product = await this.db.product.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        categories: true
      }
    })
    return product;
  }

  async create(data: AddProductDto): Promise<Product> {
    const {categoryId, ...fields} = data
    const product = await this.db.product.create({
      data: {
        ... fields,
        categories: {
         connect:{
          id:Number(categoryId)
        }
         
        }
      }
    });
    return product;
  }
  async delete(id: number) {
    const product = await this.db.product.delete({
      where: {
        id,
      },
    });
    this.fileService.deleteFile(product.image, 'images');

    return product;
  }
}
