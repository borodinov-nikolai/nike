import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AddProductDto, DeleteProductDto, UpdateProductDto } from './dtos/product.dto';
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

  async findOne(id: number) {
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

  async create(body: AddProductDto): Promise<Product> {
    const {categoryId, ...data} = body
    const product = await this.db.product.create({
      data: {
        ...data,
        categories: {
         connect:{
          id:Number(categoryId)
        }
         
        }
      }
    });
    return product;
  }


  async update(id:number, body: UpdateProductDto): Promise<Product> {
    const {image, categoryId, ...data} = body

    if(image) {
      const product = await this.findOne(id)
      this.fileService.deleteFile(product.image, 'images');
    }
    const updatedProduct = await this.db.product.update({
      where: {
        id
      },
      data: {
         ...data,
        image: image && image,
        categories: {
          set: {
            id: Number(categoryId)
          }
        }
      }
    })
    return updatedProduct
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
