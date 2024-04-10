import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class UploadService {
    constructor(private readonly db: DbService){}

    async addFile() {
        this.db.image.create
    }
}
