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
        materials: materials && {
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
        images: true,
        preview: true
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
        images: true,
        preview: true
      }
    })
    return product;
  }

  async create(body: AddProductDto): Promise<Product> {
    const { price, oldPrice, name, gender, preview, description, sizes, colors, materials, categories } = body

    const product = await this.db.product.create({
      data: {
        name,
        description,
        price,
        oldPrice,
        gender,
        preview: {
          connect: {
            id: preview
          }
        },
        // categories: {
        //   connect: categories?.map((id) => { return {id}})
        // },
        sizes: {
          connect: sizes?.map((id)=> { return {id} } )
        },
        colors: {
          connect: colors?.map((id)=> { return {id} } )
        },
        materials: {
          connect: materials?.map((id)=> { return {id} } )
        }
      }
    });
    return product;
  }


  async update(id: number, body: UpdateProductDto): Promise<Product> {
    const { price, oldPrice, name, gender, preview, description, sizes, colors, materials, categories  } = body

   
    const updatedProduct = await this.db.product.update({
      where: {
        id
      },
      data: {
        name,
        description,
        price,
        oldPrice,
        gender,
        preview: {
          connect: {
            id: preview
          }
        },
        // categories: {
        //   connect: categories?.map((id) => { return {id}})
        // },
        sizes: {
          set: sizes?.map((id)=> { return {id} } )
        },
        colors: {
          set: colors?.map((id)=> { return {id} } )
        },
        materials: {
          set: materials?.map((id)=> { return {id} } )
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
   

    return product;
  }
}
