'use client'
import React, { useState } from 'react'
import styles from './Filters.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Select from '@/src/shared/ui/select'
import Drawer from '@/src/shared/ui/drawer';
import CustomSelect from '@/src/shared/ui/dropdown';
import Dropdown from '@/src/shared/ui/dropdown';
import Sizes from './components/sizes';


const Filters = () => {
   const [sizes, setSizes] = useState<Array<number>>([])
  //  console.log(sizes)
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
        <div className={styles.filtersDesktop} >
          <div className={styles.sizes} ><Sizes sizes={sizes} setSizes={setSizes} /></div>
          <div className={styles.price} ></div>
          <div className={styles.color} ></div>
          <div className={styles.material} ></div>
          <div className={styles.reset} ></div>

        </div>
        </div>
      </div>
      <div className={styles.sorts} >
        <div className={[styles.sortsInner, ' constiner'].join(' ')} ></div>
      </div>
      
    </div>
  )
}

export default Filters