'use client'
import React, { useState } from 'react'
import styles from './Filters.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from '@/src/shared/ui/drawer';
import Sizes from './components/sizes';
import Price from './components/price';
import Color from './components/color';
import Material from './components/material';



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
          <div className={styles.price} > <Price/> </div>
          <div className={styles.color} > <Color/></div>
          <div className={styles.material} ><Material/></div>
          <div className={styles.reset} >СБРОСИТЬ ВСЕ</div>

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