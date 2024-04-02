import { Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/db.service';
import { AddCategoryDto, DeleteCategoryDto } from './dtos/category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
   constructor(private readonly db: DbService){}

    async create(data:AddCategoryDto): Promise<Category> {
      const category = await this.db.category.create({
            data
        })

        return category
    }
    async update(id: number, data: AddCategoryDto) {
        const category = await this.db.category.update({
          where: {
              id
          },
          data
        })
        return category
      }
  
      async findOne(id: number) {
          const category = await this.db.category.findUniqueOrThrow({
              where: {
                  id
              }
          })
          return category
  }
    async findAll(): Promise<Category[]> {
        const categories = await this.db.category.findMany({
            orderBy: {
                id: 'asc'
            }
        })
        return categories
    }

    async delete(id: number): Promise<string> {
        await this.db.category.delete({
            where: {
                id
            }
        })
        return 'success'
    }

}
