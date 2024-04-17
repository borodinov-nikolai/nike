import React, { FC } from 'react'
import styles from './ProductPage.module.scss'
import { Product } from '@/src/entities/product'
import Breadcrumb from '@/src/shared/ui/breadcrumb'
import { Image } from 'antd';
import { ProductDescription } from '@/src/widgets/productDescription';


interface Props {
  product: Product
}

export const ProductPage : FC<Props> = ({product}) => {

  return (
    <main className={styles.root} >
     <div className="container">
       <Breadcrumb items={[{label: 'Каталог', url: '/catalog/all'}, {label: product.categories[0].name, url: `/catalog/${product.categories[0].value}`},
        {label: product.name, url:'#'}
           ]} />
          <ProductDescription product={product} />
     </div>
    </main>
  )
}

