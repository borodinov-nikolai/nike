import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AddColorDto} from './dtos/color.dto';

@Injectable()
export class ColorsService {
    constructor(private readonly db: DbService){}

    async create(data: AddColorDto) {
       const color = await this.db.color.create({
            data
        })

        return color
    }
    async update(id: number, data: AddColorDto) {
        const color = await this.db.color.update({
          where: {
              id
          },
          data
        })
        return color
      }
  
      async findOne(id: number) {
          const color = await this.db.color.findUniqueOrThrow({
              where: {
                  id
              }
          })
          return color
  }
    async findAll() {
        const colors = await this.db.color.findMany({
            orderBy: {
                id: 'asc'
            }
        })
        return colors
    }
    async delete(id: number) {
    
        await this.db.color.delete({
            where: {
                id
            }
        })
        return 'success'
    }
}
