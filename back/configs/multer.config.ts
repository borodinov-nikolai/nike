import { diskStorage } from "multer"
import { extname, join } from "path";


  

export const multerConfig = {
    dist: './uploads',
    storage: diskStorage({
        destination: function (req, file, cb) {
            cb(null, join(__dirname, '..', '..', '/uploads'))
          },
          filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname))
          }
    })
  }