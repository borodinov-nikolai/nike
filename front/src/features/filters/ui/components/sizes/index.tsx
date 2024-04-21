'use client'
import React, { FC } from 'react'
import styles from './Sizes.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setSizes } from '../../../store/filtersSlice'
import { useGetAllSizesQuery } from '@/src/entities/productSize'




// const sizesList = [36,37,38,39,40]




const Sizes = () => {
         const dispatch = useAppDispatch()
         const {sizes} = useAppSelector((state)=> state.filters)
         const {data: sizesList} = useGetAllSizesQuery()
         


  return (
    <Dropdown name='Размер (EU)'>
    <div className={styles.sizesContent} >
      <ul className={styles.list} >
        {sizesList?.map(({id, value})=> {
            return <li className={[styles.listItem, sizes.includes(+value) && styles.listItem__active].filter(Boolean).join(' ')} onClick={()=> dispatch(setSizes(+value))} key={value} >{value}</li>
        } )}
       
      </ul>
    </div>
    </Dropdown>
  )
}

export default Sizes