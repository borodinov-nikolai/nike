import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { colorDto } from './dtos/color.dto';

@Injectable()
export class ColorsService {
    constructor(private readonly db: DbService){}

    async create(data: colorDto) {
       const color = this.db.color.create({
            data
        })

        return color
    }
    async findAll() {
        const colors = this.db.color.findMany()
        return colors
    }
    async delete(id: number) {
        this.db.color.delete({
            where: {
                id
            }
        })
        return 'success'
    }
}
