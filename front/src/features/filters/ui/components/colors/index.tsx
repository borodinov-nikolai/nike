'use client'
import React from 'react'
import styles from './Colors.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setColors } from '../../../store/filtersSlice'



const colorsList = [
  {
  id: 1,
  name: 'Красный',
  color: 'red'
 },
 {
  id: 2,
  name: 'Синий',
  color: 'blue'
 },
 { id:3,
  name: 'Черный',
  color: 'black'
}
]

const Colors = () => {
  const {colors} = useAppSelector((state)=> state.filters)
  const dispatch = useAppDispatch()
  console.log(colors)
  return (
   
      <Dropdown name='Цвет'>
        <div className={styles.content} >
          <ul className={styles.list} >
            {colorsList.map(({id, name, color})=> {
              return <li  onClick={()=> dispatch(setColors(color))} className={styles.listItem} key={id}> 
               <div className={[styles.colorCircle, colors.includes(color) && styles.colorCircle__active].filter(Boolean).join(' ')} style={{backgroundColor: color}} ></div> 
               <p>{name}</p>
               </li>
            })}
          </ul>
        </div>
      </Dropdown>
  
  )
}

export default Colors