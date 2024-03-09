import React from 'react'
import styles from './Filters.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Select from '@/src/shared/ui/select'
import Drawer from '@/src/shared/ui/drawer';


const Filters = () => {
  return (
    <div className={styles.root} >

      <div className={styles.filters} >
        <div className={[styles.filtersInner, ' container'].join(' ')} >
        <div className={styles.filtersMobile} >
          <Drawer>
          <div className={styles.filtersMobileOpener} >
            <RxHamburgerMenu className={styles.burgerIcon} /> Показать фильтры
          </div>
          </Drawer>
          </div>
        <div className={styles.filtersDesktop} >фильтры</div>
        </div>
      </div>
      <div className={styles.sorts} >
        <div className={[styles.sortsInner, ' constiner'].join(' ')} ></div>
      </div>
      
    </div>
  )
}

export default Filters