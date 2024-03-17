'use client'
import React, { useEffect, useState } from 'react'
import styles from './Filters.module.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from '@/src/shared/ui/drawer';
import Sizes from './components/sizes';
import Price from './components/price';
import Colors from './components/colors';
import Material from './components/material';
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks';
import PageSize from './components/pageSize';
import Sort from './components/sort';
import { removePrice, resetFilters, setColors, setMaterials, setSizes } from '../store/filtersSlice';
import qs from 'qs'
import { useRouter } from 'next/navigation';




const Filters = () => {
  const router = useRouter()
  const [showPrice, setShowPrice] = useState<boolean>(false)
   const {sizes, pageSize, sort, materials, colors, price } = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()


  useEffect(()=> {
    if(price.min !== 2500 || price.max !== 7500) {
      setShowPrice(true) 
    }
  },[price])

  useEffect(()=> {
   const queryString = qs.stringify({
    sizes,  
    colors,
    orderBy: [
      {
        price: sort
      }
    ],
    materials,
    pageSize,
    price
   })
  
    router.replace(`?${queryString}`)
   
   
  },[sizes, pageSize, sort, materials, colors, price ])

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
          <div className={styles.color} ><Colors/></div>
          <div className={styles.material} ><Material/></div>
          <div onClick={()=>{ dispatch(resetFilters()); setShowPrice(false)}} className={styles.reset} >СБРОСИТЬ ВСЕ</div>

        </div>
        </div>
      </div>
      <div className={styles.changedFilters} >
        <div className={[styles.changedFiltersInner, ' container'].join(' ')} >
          {sizes?.map((size)=> {
            return <div className={styles.changedFilter} onClick={()=> dispatch(setSizes(size))}  key={size} >{size} x</div> 
          })}
          {(price.min !== 0 || price.max !== 0) && showPrice && <div onClick={()=>{ dispatch(removePrice()); setShowPrice(false)}} className={styles.changedFilter} >цена от {price.min} до {price.max} x</div> }
          {colors?.map((color)=> {
            return <div className={styles.changedFilter} onClick={()=> dispatch(setColors(color))}  key={color} >{color} x</div> 
          })}
          {materials?.map((material)=> {
            return <div className={styles.changedFilter} onClick={()=> dispatch(setMaterials(material))}  key={material} >{material} x</div> 
          })}
        </div>
      </div>
      <div className={styles.filtersBottomDesktop} >
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