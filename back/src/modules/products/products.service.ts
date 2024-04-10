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
    const { orderBy, price, category, sizes, colors, materials, skip, take} = query
    const filters = {
      skip: skip? +skip: 0,
      take: take? +take : 50 ,
      orderBy: orderBy ?
       orderBy : {
          price: 'asc'
       },
      where: {
        price: {
          lte: price?.max && +price.max,
          gte: price?.min && +price.min,
        },
        categories: category && category !=="all" ? {
          some: {
            value: category
          }
        } : undefined,
         sizes: sizes && {
          some: {
            value: {
              in: sizes
            }
          }
        } ,
        colors: colors && {
          some: {
            name: {
              in: colors 
            }
          }
        } ,
        materials: {
          some: {
            name: {
              in: materials 
            }
          }
        } 
      },
      include: {
        categories: true,
        sizes: true,
        colors: true,
        materials: true,
        images: true
      }
    }
    
    const products = await this.db.product.findMany(filters);
    const totalCount = await this.db.product.count()
    return {products, totalCount};
  }

  async findOne(id: number) {
    const product = await this.db.product.findUnique({
      where: {
        id: +id,
      },
      include: {
        categories: true,
        sizes: true,
        colors: true,
        materials: true,
        images: true
      }
    })
    return product;
  }

  async create(body: AddProductDto): Promise<Product> {
    const { price, name, gender, preview, description, characteristics } = body

    const product = await this.db.product.create({
      data: {
        name,
        preview,
        description,
        characteristics,
        price: +price,
        gender
        // categories: {
        //   connect: categories.map((id) => { return {id}})
        // },
        // sizes: {
        //   connect: sizes.map((id)=> { return {id} } )
        // },
        // colors: {
        //   connect: colors.map((id)=> { return {id} } )
        // },
        // materials: {
        //   connect: materials.map((id)=> { return {id} } )
        // }
      }
    });
    return product;
  }


  async update(id: number, body: UpdateProductDto): Promise<Product> {
    const { price, name, gender } = body

   
    const updatedProduct = await this.db.product.update({
      where: {
        id
      },
      data: {
        name,
        gender,
        price: +price,
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
   

    return product;
  }
}
