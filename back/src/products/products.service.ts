import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ProductDto } from './dtos/product.dto';
import { FileService } from 'src/file/file.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    private readonly db: DbService,
    private readonly fileService: FileService,
  ) {}

  async findAll() {
    const products = await this.db.product.findMany();
    return products;
  }

  async create(data: ProductDto): Promise<Product> {
    const product = await this.db.product.create({
      data,
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
