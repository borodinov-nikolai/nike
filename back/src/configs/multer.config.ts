import { diskStorage } from "multer"
import{ extname, join } from "path"




const rootPath = process.cwd()

export const multerConfig = {
    dist: './uploads',
    storage: diskStorage({
        destination: function (req, file, cb) {
            let folder:string
            if (file.mimetype.startsWith('image/')){
              folder = 'images'
            } else {
              folder = 'other'
            }
            cb(null, join(rootPath,'files', 'uploads', folder))
          },
          filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname))
          }
    })
  }