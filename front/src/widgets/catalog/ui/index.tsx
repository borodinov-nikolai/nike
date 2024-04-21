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
        {data?.products?.map(({id, name, price, colors, gender, preview, oldPrice})=> {
          return <ProductCard key={id} id={id} gender={gender} name={name} colors={colors} image={process.env.NEXT_PUBLIC_BACKEND_UPLOADS + '/images/' + preview.name} price={price} 
          oldPrice={oldPrice}
          />
        })}
      </div>
      <div className={styles.pagination} ><Pagination/></div>

    </div>
  )
}

export default Catalog