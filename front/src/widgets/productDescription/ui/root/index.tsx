import React from 'react'
import styles from './ProductDescription.module.scss'
import { Product } from '@/src/entities/product'
import Gallery from '../components/mobileGallery'
import DescriptionInfo from '../components/descriptionInfo'
import MobileGallery from '../components/mobileGallery'
import DesktopGallery from '../components/desktopGallery'
import Characteristics from '../components/characteristics'




export const ProductDescription = ({product}:{product: Product}) => {
  const {description, images, characteristics} = product
  return (
    <div className={styles.root} >
      <div className={styles.decriptionHolder} >
        <div className={styles.descriptionGallery} >
          <div className={styles.mobileGallery} >
           {images && <MobileGallery images={images} />}
          </div>
          <div className={styles.desktopGallery} >
            {images && <DesktopGallery images={images}/>}
          </div>
        </div>
        <div className={styles.descriptionInfo} >
          <DescriptionInfo product={product} />
          </div>
          <div className={styles.characteristics} >
          <Characteristics description={description} characteristics={characteristics} />
          </div>
      </div>
    </div>
  )
}

