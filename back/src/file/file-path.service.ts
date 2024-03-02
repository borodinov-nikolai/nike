import { Injectable } from "@nestjs/common";
import * as path from "path";



@Injectable()
export class FilePathService {

    getAppRootPath():string {
        return process.cwd()
    }

    getUploadFolderPath():string {
        return path.join(this.getAppRootPath(), 'files', 'uploads')
    }

    getFile(filename:string, category:string): string {
        return path.join(this.getUploadFolderPath(),  category, filename)
    }
}