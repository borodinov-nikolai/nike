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
        materials: true
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
      }
    })
    return product;
  }

  async create(body: AddProductDto): Promise<Product> {
    const { price, name, images, gender } = body
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
        images,
        price: +price,
        gender,
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
    const { images, price, name, gender } = body
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
    if (images.length > 0) {
      const product = await this.findOne(id)
      for (const image of product.images) {
        await this.fileService.deleteFile(image, 'images');
      }
    } 
    const updatedProduct = await this.db.product.update({
      where: {
        id
      },
      data: {
        name,
        gender,
        ...(images.length > 0 ? {images} : {}),
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
    product.images.forEach((image)=> {

      this.fileService.deleteFile(image, 'images');
    })

    return product;
  }
}
