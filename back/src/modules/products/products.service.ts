import { Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/db.service';
import { AddProductDto, UpdateProductDto } from './dtos/product.dto';
import { FileService } from 'src/modules/file/file.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private readonly db: DbService,
    private readonly fileService: FileService,
  ) { }

  async findAll(query: any) {
    const { orderBy, price, category} = query
    console.log(query)
    const products = await this.db.product.findMany({
      orderBy,
      where: {
        price: {
          lte: price?.max && +price.max,
          gte: price?.min && +price.min,
        },
        categories: {
          some: {
            value: (category && category !=="all") ? category : {}
          }
        }
      }
    });
    return products;
  }

  async findOne(id: number) {
    const product = await this.db.product.findUnique({
      where: {
        id: +id,
      },
      include: {
        categories: true
      }
    })
    return product;
  }

  async create(body: AddProductDto): Promise<Product> {
    const { price, name, image } = body
    const categories: number[] = []
    for (const key of Object.keys(body)) {
      if (key.startsWith('category_'))
        categories.push(+body[key])
    }
    const product = await this.db.product.create({
      data: {
        name,
        image,
        price: +price,
        categories: {
          connect: categories.map((category) => { return { id: category } })

        }
      }
    });
    return product;
  }


  async update(id: number, body: UpdateProductDto): Promise<Product> {
    const { image, price, name } = body
    const categories: number[] = []
    for (const key of Object.keys(body)) {
      if (key.startsWith('category_'))
        categories.push(+body[key])
    }
    if (image) {
      const product = await this.findOne(id)
      this.fileService.deleteFile(product.image, 'images');
    }
    const updatedProduct = await this.db.product.update({
      where: {
        id
      },
      data: {
        name,
        image: image && image,
        price: +price,
        categories: {
          set: categories.map((category) => { return { id: category } })

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
