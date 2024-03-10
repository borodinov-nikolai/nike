'use client'
import React, { useState } from 'react'
import styles from './Filters.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from '@/src/shared/ui/drawer';
import Sizes from './components/sizes';
import Price from './components/price';
import Color from './components/color';
import Material from './components/material';
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks';
import PageSize from './components/pageSize';
import Sort from './components/sort';
import { resetFilters } from '../store/filtersSlice';





const Filters = () => {
   const {sizes, pageSize, sort} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.root} >

      <div className={styles.filtersTop} >
        <div className={[styles.filtersTopInner, ' container'].join(' ')} >
        <div className={styles.filtersMobile} >
          <Drawer>
          <div className={styles.filtersMobileOpener} >
            <RxHamburgerMenu className={styles.burgerIcon} /> Показать фильтры
          </div>
          </Drawer>
          </div>
        <div className={styles.filtersDesktop} >
          <div className={styles.sizes} ><Sizes /></div>
          <div className={styles.price} ><Price/> </div>
          <div className={styles.color} ><Color/></div>
          <div className={styles.material} ><Material/></div>
          <div onClick={()=> dispatch(resetFilters())} className={styles.reset} >СБРОСИТЬ ВСЕ</div>

        </div>
        </div>
      </div>
      <div className={styles.filtersBottom} >
        <div className={[styles.filtersBottomInner, ' container'].join(' ')} >
          <div className={styles.leftBlock} >Показано {pageSize} из 137 товаров</div>
          <div className={styles.rightBlock}>
            <div className={styles.pageSize}><PageSize/></div>
            <div className={styles.sort}><Sort/></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Filters