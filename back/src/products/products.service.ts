import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(private readonly db: DbService){}

    async getAllProducts():Promise<Product[]>{
        const products = await this.db.product.findMany()
        return products;
    }
}
