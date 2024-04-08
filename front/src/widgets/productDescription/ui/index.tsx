import React from 'react'
import styles from './ProductDescription.module.scss'
import { Product } from '@/src/entities/product'
import Gallery from './components/gallery'
import Description from './components/description'




export const ProductDescription = ({product}:{product: Product}) => {
  return (
    <div>
      <Gallery images={product.images} />
      <Description/>
      <textarea name="" id="" cols={30} rows={10}></textarea>
    </div>
  )
}

