import React from 'react'
import styles from './MobileNavbar.module.scss'
import Accordion from '@/src/shared/ui/accordion'


const MobileNavabr = () => {
  return (
    <div className={styles.root} >
      <h3 className={styles.title} >Каталог</h3>
      <div className={styles.catalog} >
        <div className={styles.catalog_item} ><Accordion title={'Димесизон'}>fweqfwqf</Accordion></div>
      </div>
    </div>
  )
}

export default MobileNavabr