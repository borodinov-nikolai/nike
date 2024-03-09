'use client'
import React, { FC } from 'react'
import styles from './Sizes.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'



const sizesList = [36,37,38,39,40]


interface Props {
    sizes: number[]
    setSizes: React.Dispatch<React.SetStateAction<number[]>>
}

const Sizes:FC<Props> = ({setSizes, sizes}) => {
         

    const handleSet = (size:number)=> {
         
        if(sizes.includes(size)) {
            setSizes(sizes.filter( item => item !== size ))
        } else {
            setSizes([...sizes, size])
        }
    }

    console.log(sizes)
  return (
    <Dropdown name='Размер (EU)'>
    <div className={styles.sizesContent} >
      <ul className={styles.list} >
        {sizesList.map((size)=> {
            return <li className={[styles.listItem, sizes.includes(size) && styles.listItem__active].filter(Boolean).join(' ')} onClick={()=> handleSet(size)} key={size} >{size}</li>
        } )}
       
      </ul>
    </div>
    </Dropdown>
  )
}

export default Sizes