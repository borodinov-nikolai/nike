import { getProduct } from '@/src/entities/product'
import { ProductPage } from '@/src/pages_/product'
import React from 'react'



const page = async ({params}:{params: {id: number}}) => {
  const product = await getProduct(params.id)

  return (
    <>
    {product && <ProductPage product={product} />}
    </>
  )
}

export default page 