import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
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

    async findAll(): Promise<Category[]> {
        const categories = await this.db.category.findMany()
        return categories
    }

    async delete(id: number): Promise<string> {
        console.log(id)
        await this.db.category.delete({
            where: {
                id
            }
        })
        return 'success'
    }

}
