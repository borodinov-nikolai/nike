import React, { FC } from 'react'
import styles from './DesktopGallery.module.scss'
import { IImage } from '@/src/entities/image'
import { Image } from 'antd'

interface IProps {
  images: IImage[]
}
const DesktopGallery: FC<IProps> = ({images}) => {
  const imageURL = process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/'
  return (
    <div className={styles.root} >
      <div className={styles.mainImageHolder} >
        <Image width={"100%"} src={imageURL + images[0].name} />
      </div>

         {images.slice(1).map(({id, name})=> <div key={id} className={styles.imageHolder} >
           <Image  src={imageURL + name} />
         </div>)}
    </div>
  )
}

export default DesktopGallery