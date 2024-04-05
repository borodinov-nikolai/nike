import React from 'react'
import styles from './Catalog.module.scss'
import { getProducts } from '@/src/entities/product'
import { ProductCard } from '@/src/entities/productCard'
import { Filters } from '@/src/features/filters'
import { Pagination } from '@/src/features/pagination'


const Catalog = async ({params, searchParams}:{params: {category: string}, searchParams: Record<string, string>}) => {
   const data = await getProducts({...params, ...searchParams})

  return (
    <div className={styles.root} 
    >
        <div className={styles.filters} ><Filters totalCount={data?.totalCount? data.totalCount : 0} /></div>
      <div className={[styles.inner, ' container'].join(' ')} >
        {data?.products?.map(({id, name, price, image, colors, gender})=> {
          return <ProductCard key={id} id={id} gender={gender} name={name} colors={colors} images={[process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/' + image]} price={price} 
          oldPrice={4000}
          />
        })}
      </div>
      <div className={styles.pagination} ><Pagination/></div>

    </div>
  )
}

export default Catalog