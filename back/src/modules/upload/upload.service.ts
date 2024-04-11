import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CreateImageDto } from '../images/dtos/createImage.dto';

@Injectable()
export class UploadService {
    constructor(private readonly db: DbService){}

    async addImage({name}: CreateImageDto) {
       const image = this.db.image.create({
            data: {
                name
            }       
        })
        return image
    }

}
