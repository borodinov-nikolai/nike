import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AddMaterialDto} from './dtos/material.dto';

@Injectable()
export class MaterialsService {
    constructor(private readonly db: DbService){}

    async create(data: AddMaterialDto) {
       const material = await this.db.material.create({
            data
        })

        return material
    }

    async update(id: number, data: AddMaterialDto) {
      const material = await this.db.material.update({
        where: {
            id
        },
        data
      })
      return material
    }
    async findAll() {
        const materials = await this.db.material.findMany({
            orderBy: {
                id: 'asc'
            }
        })
        return materials
    }
    async findOne(id: number) {
            const material = await this.db.material.findUniqueOrThrow({
                where: {
                    id
                }
            })
            return material
    }
    async delete(id: number) {
        await this.db.material.delete({
            where: {
                id
            }
        })
        return 'success'
    }
}
