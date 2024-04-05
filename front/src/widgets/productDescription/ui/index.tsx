import React from 'react'
import styles from './ProductDescription.module.scss'
import { Product } from '@/src/entities/product'
import Gallery from './components/gallery'
import Description from './components/description'




export const ProductDescription = ({product}:{product: Product}) => {
  return (
    <div>
      <Gallery/>
      <Description/>
    </div>
  )
}

