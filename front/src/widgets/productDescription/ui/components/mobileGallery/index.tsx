'use client'
import React, { FC, useState } from 'react'
import styles from './MobileGallery.module.scss'
import { Image } from 'antd'
import { IImage } from '@/src/entities/image'
import { Swiper, SwiperSlide } from 'swiper/react'


interface IProps {
  images: IImage[]
}

const MobileGallery: FC<IProps> = ({ images }) => {
  const [preview, setPreview] = useState<string>()
 const imageURL = process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/'
   return (
    <div className={styles.root} >
      <Image className={styles.previewImage} width={'85vw'} height={'85vw'} src={imageURL + ( preview? preview : images[0].name)} />

      <Swiper
      className={styles.swiper}
      slidesPerView={'auto'}
      spaceBetween={10}
      >
      
      {images.map(({ id, name }) => {
        return   <SwiperSlide key={id} onClick={()=> setPreview(name)}  className={styles.swiperSlide} ><Image preview={false}  key={id} src={imageURL + name} width={90} height={90} alt="" /> </SwiperSlide>

      })}
       
      </Swiper>
    </div>
  )
}

export default MobileGallery