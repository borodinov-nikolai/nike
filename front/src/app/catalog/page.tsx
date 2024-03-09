import React from 'react'
import styles from './CatalogPage.module.scss'
import { Catalog } from '@/src/widgets/catalog'
import Breadcrumb from '@/src/shared/ui/breadcrumb'


const CatalogPage = () => {
  return (
    <div className={styles.root} >
      <Breadcrumb items={[{label: "Мужские", url: '#'}, {label:'Коллекция Air Max', url:'#'}]} />
      <Catalog/>
    </div>
  )
}

export default CatalogPage