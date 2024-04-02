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
    const { orderBy, price, category, sizes, colors, materials} = query
  

    const filters = {
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
        
      }
    }
    
    const products = await this.db.product.findMany(filters);
    return products;
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
        materials: true
      }
    })
    return product;
  }

  async create(body: AddProductDto): Promise<Product> {
    const { price, name, image } = body
    const categories: number[] = []
    const sizes: number[] = []
    const colors: number[] = []
    const materials: number[] = []
    for (const key of Object.keys(body)) {
      if (key.startsWith('category_'))
        categories.push(+body[key])
    }
    for (const key of Object.keys(body)) {
      if (key.startsWith('size_'))
      sizes.push(+body[key])
    }
    for(const key of Object.keys(body)) {
      if(key.startsWith('color_'))
      colors.push(+body[key])
    }
    for(const key of Object.keys(body)) {
      if(key.startsWith('material_'))
      materials.push(+body[key])
    }
    const product = await this.db.product.create({
      data: {
        name,
        image,
        price: +price,
        categories: {
          connect: categories.map((id) => { return {id}})
        },
        sizes: {
          connect: sizes.map((id)=> { return {id} } )
        },
        colors: {
          connect: colors.map((id)=> { return {id} } )
        },
        materials: {
          connect: materials.map((id)=> { return {id} } )
        }
      }
    });
    return product;
  }


  async update(id: number, body: UpdateProductDto): Promise<Product> {
    const { image, price, name } = body
    const categories: number[] = []
    const sizes: number[] = []
    const colors: number[] = []
    const materials: number[] = []
    for (const key of Object.keys(body)) {
      if (key.startsWith('category_'))
        categories.push(+body[key])
    }
    for (const key of Object.keys(body)) {
      if (key.startsWith('size_'))
      sizes.push(+body[key])
    }
    for(const key of Object.keys(body)) {
      if(key.startsWith('color_'))
      colors.push(+body[key])
    }
    for(const key of Object.keys(body)) {
      if(key.startsWith('material_'))
      materials.push(+body[key])
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
          set: categories.map((id) => { return {id} })
        },
        sizes: {
          set: sizes.map((id) => { return {id} })
        },
        colors: {
          set: colors.map((id)=> { return {id}})
        },
        materials: {
          set: materials.map((id)=> { return {id}})
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
