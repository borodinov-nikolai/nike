'use client'
import React from 'react'
import styles from './Gallery.module.scss'
import { Image } from 'antd'


const Gallery = ({images}: {images: string[]}) => {
  console.log(images)
  return (
    <div className={styles.root} >
      {images.map((image, i)=> {
return <Image key={i} src={process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/' + image} width={400} height={'auto'} alt="" />
      })}
    </div>
  )
}

export default Gallery