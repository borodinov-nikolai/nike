import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { colorDto } from './dtos/color.dto';

@Injectable()
export class ColorsService {
    constructor(private readonly db: DbService){}

    async create(data: colorDto) {
       const color = await this.db.color.create({
            data
        })

        return color
    }
    async findAll() {
        const colors = await this.db.color.findMany()
        return colors
    }
    async delete(id: number) {
        console.log(id)
        await this.db.color.delete({
            where: {
                id
            }
        })
        return 'success'
    }
}
