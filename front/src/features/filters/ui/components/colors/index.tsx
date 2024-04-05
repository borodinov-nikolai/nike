'use client'
import React from 'react'
import styles from './Colors.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setColors } from '../../../store/filtersSlice'
import { useGetAllColorsQuery } from '@/src/entities/productColor'





const Colors = () => {
  const {colors} = useAppSelector((state)=> state.filters)
  const {data: colorsList} = useGetAllColorsQuery()
  const dispatch = useAppDispatch()

  return (
   
      <Dropdown name='Цвет'>
        <div className={styles.content} >
          <ul className={styles.list} >
            {colorsList?.map(({id, name, value})=> {
              return <li  onClick={()=> dispatch(setColors(name))} className={styles.listItem} key={id}> 
               <div className={[styles.colorCircle, colors.includes(name) && styles.colorCircle__active].filter(Boolean).join(' ')} style={{backgroundColor: value}} ></div> 
               <p>{name}</p>
               </li>
            })}
          </ul>
        </div>
      </Dropdown>
  
  )
}

export default Colors