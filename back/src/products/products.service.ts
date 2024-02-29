import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Product } from './entities/product.entity';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
    constructor(private readonly db: DbService){}

    async findAll(){
        const products = await this.db.product.findMany()
        return products;
    }

    async create(data:ProductDto){
        const product = await this.db.product.create({
            data
        })
        return product;
    }
    async delete(id:number){
        const product = await this.db.product.delete({
            where: {
                id
            }
        })
        return product;
    }
}
