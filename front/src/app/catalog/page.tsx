import React from 'react'
import styles from './CatalogPage.module.scss'
import { Catalog } from '@/src/widgets/catalog'
import Breadcrumb from '@/src/shared/ui/breadcrumb'
import { useParams } from 'next/navigation'


const CatalogPage = ({searchParams} : {searchParams : any}) => {
   console.log(searchParams)
  return (
    <div className={styles.root} >
      <Breadcrumb items={[{label: "Мужские", url: '#'}, {label:'Коллекция Air Max', url:'#'}]} />
      <Catalog searchParams={searchParams} />
    </div>
  )
}

export default CatalogPage