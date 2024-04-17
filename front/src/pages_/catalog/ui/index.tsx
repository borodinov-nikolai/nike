import React from 'react'
import styles from './CatalogPage.module.scss'
import Breadcrumb from '@/src/shared/ui/breadcrumb'
import { Catalog } from '@/src/widgets/catalog'



export const CatalogPage = ({params, searchParams} : {params: {category:string}, searchParams: Record<string, string>}) => {

  return (
    <main className={styles.root} >
      {params.category !== 'all'? <Breadcrumb items={[{label: "Каталог", url: '/catalog/all'}, {label:params.category, url:`#`}]} /> :
       <Breadcrumb items={[{label: "Каталог", url: '/#'}]} />
      }
      <Catalog params={params} searchParams={searchParams} />
    </main>
  )
}

