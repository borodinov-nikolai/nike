import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateImageDto } from './dtos/createImage.dto';

@Injectable()
export class ImagesService {
    constructor(private readonly db: DbService){}

    async getAll() {
       const images = await this.db.image.findMany()
       return images
    }

    async addImage(data: CreateImageDto) {
        this.db.image.create({
            data
        })
    }
}
