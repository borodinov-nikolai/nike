import { Injectable } from '@nestjs/common';
import { DbService } from 'src/modules/db/db.service';
import { Size } from './entities';
import { AddSizeDto } from './dtos';



@Injectable()
export class SizesService {
   constructor(private readonly db: DbService){}

    async create(data:AddSizeDto): Promise<Size> {
      const size = await this.db.size.create({
            data
        })

        return size
    }

    async update(id: number, data: AddSizeDto) {
        const size = await this.db.size.update({
          where: {
              id
          },
          data
        })
        return size
      }
  
      async findOne(id: number) {
          const size = await this.db.size.findUniqueOrThrow({
              where: {
                  id
              }
          })
          return size
  }
    async findAll(): Promise<Size[]> {
        const sizes = await this.db.size.findMany({
            orderBy: {
                id: 'asc'
            }
        })
        return sizes
    }

    async delete(id: number): Promise<string> {
        await this.db.size.delete({
            where: {
                id
            }
        })
        return 'success'
    }

}
