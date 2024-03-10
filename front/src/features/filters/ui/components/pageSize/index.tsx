'use client'
import React from 'react'
import styles from './PageSize.module.scss'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setPageSize } from '../../../store/filtersSlice'



const sizes = [9,12,18,24]

const PageSize = () => {
    const {pageSize} = useAppSelector((state)=> state.filters)
    const dispatch = useAppDispatch()
  return (
    <div className={styles.root} >
      <p className={styles.description} >Показывать по:</p>
      <ul className={styles.list} >
        {sizes.map((size)=> {
            return <li key={size} onClick={()=> dispatch(setPageSize(size))}
             className={[styles.item, pageSize === size && styles.item__active].filter(Boolean).join(' ')} >{size}</li>
        })}
      </ul>
    </div>
  )
}

export default PageSize