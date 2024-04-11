import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateImageDto } from './dtos/createImage.dto';
import { FileService } from '../file/file.service';

@Injectable()
export class ImagesService {
    constructor(private readonly db: DbService, private readonly fileService: FileService){}

    async getAll() {
       const images = await this.db.image.findMany()
       return images
    }

    async addImage(data: CreateImageDto) {
        this.db.image.create({
            data
        })
    }

    async deleteImage(id: number) {
        const image = await this.db.image.findUnique({
            where: {
                id
            }
        })
        await this.fileService.deleteFile(image.name, 'images')
         
        await this.db.image.delete({
            where: {
                id
            }
        })
        
        return 'файл успешно удален'
    }
}
