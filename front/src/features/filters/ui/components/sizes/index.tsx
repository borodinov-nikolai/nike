'use client'
import React, { FC } from 'react'
import styles from './Sizes.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setSizes } from '../../../store/filtersSlice'




const sizesList = [36,37,38,39,40]




const Sizes = () => {
         const dispatch = useAppDispatch()
         const {sizes} = useAppSelector((state)=> state.filters)
         


  return (
    <Dropdown name='Размер (EU)'>
    <div className={styles.sizesContent} >
      <ul className={styles.list} >
        {sizesList.map((size)=> {
            return <li className={[styles.listItem, sizes.includes(size) && styles.listItem__active].filter(Boolean).join(' ')} onClick={()=> dispatch(setSizes(size))} key={size} >{size}</li>
        } )}
       
      </ul>
    </div>
    </Dropdown>
  )
}

export default Sizes