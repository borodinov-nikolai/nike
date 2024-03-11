'use client'
import React, { useState } from 'react'
import styles from './Price.module.scss'
import Range from '@/src/shared/ui/range'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setPrice } from '../../../store/filtersSlice'


const Price = () => {
    const dispatch = useAppDispatch()
    const {price} = useAppSelector((state)=> state.filters)
   
    
    const handleValue = (value:number, input:string) => {
           if(input === 'min' && value < price.max) {
            dispatch(setPrice({min: value, max: price?.max}))
           }
           if(input === 'max' && value > price.min) {
            dispatch(setPrice({max: value, min: price?.min})) 
           } 
    }

  

  return (
    <div className={styles.root} >
        <h3 className={styles.name} >Цена:</h3>
        <div className={styles.range} ><Range values={price} setValues={handleValue} /></div>
        <div className={styles.inputs} >
            <div className={styles.inputHolder} ><input readOnly value={price.min} type="number" /> ₽</div>
            <div className={styles.inputHolder} ><input readOnly value={price.max} type="number" /> ₽</div>
        </div>
    </div>
  )
}

export default Price