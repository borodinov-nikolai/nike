import React from 'react'
import styles from './Catalog.module.scss'
import { getProducts } from '@/src/entities/product'
import { ProductCard } from '@/src/entities/productCard'


const Catalog = async () => {

   const products = await getProducts()
  
  return (
    <div>
      {products.map(({id, name, price, image})=> {
        return <ProductCard key={id} id={id} name={name} images={[process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/' + image]} price={price} gender={'мужские'}
        oldPrice={4000} colors={['red', 'blue', 'green']}
        />
      })}
    </div>
  )
}

export default Catalog