'use client'
import React from 'react'
import styles from './Price.module.scss'
import Range from '@/src/shared/ui/range'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setPrice } from '../../../store/filtersSlice'


const Price = () => {
    const dispatch = useAppDispatch()
    const {price} = useAppSelector((state)=> state.filters)
   
    
    
  

  return (
    <div className={styles.root} >
        <h3 className={styles.name} >Цена:</h3>
       <Range onChange={(value)=> dispatch(setPrice(value))}/>
    </div>
  )
}

export default Price