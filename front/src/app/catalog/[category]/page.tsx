import React from 'react'
import { CatalogPage } from '@/src/pages_/catalog'


const page = ({params, searchParams} : {params: {category:string}, searchParams: Record<string, string>}) => {

  return (
    <>
    <CatalogPage params={params} searchParams={searchParams} />
    </>
  )
}

export default page