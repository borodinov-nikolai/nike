import React from 'react'
import styles from './Catalog.module.scss'
import { getProducts } from '@/src/entities/product'
import { ProductCard } from '@/src/entities/productCard'
import { Filters } from '@/src/features/filters'


const Catalog = async ({searchParams}:{searchParams: any}) => {

   const products = await getProducts(searchParams)
  
  return (
    <div className={styles.root} 
    >
        <div className={styles.filters} ><Filters/></div>
      <div className={[styles.inner, ' container'].join(' ')} >
        {products?.map(({id, name, price, image})=> {
          return <ProductCard key={id} id={id} name={name} images={[process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/' + image]} price={price} gender={'мужские'}
          oldPrice={4000} colors={['red', 'blue', 'green']}
          />
        })}
      </div>

    </div>
  )
}

export default Catalog