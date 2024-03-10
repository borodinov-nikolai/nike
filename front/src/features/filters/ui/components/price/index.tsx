'use client'
import React, { useState } from 'react'
import styles from './Price.module.scss'
import Range from '@/src/shared/ui/range'


const Price = () => {
    const [values, setValues] = useState<{left:number, right:number}>({left: 2500, right:7500})

    const handleValue = (value:number, input: string) => {
           if(input === 'left' && value < values.right) {
            setValues({left: value, right: values?.right})
           }
           if(input === 'right' && value > values.left) {
            setValues({right: value, left: values?.left})
           } 
    }

  
  return (
    <div className={styles.root} >
        <h3 className={styles.name} >Цена:</h3>
        <div className={styles.range} ><Range setValues={setValues} values={values}/></div>
        <div className={styles.inputs} >
            <div className={styles.inputHolder} ><input value={values.left} onChange={(e)=> handleValue(Number(e.target.value), 'left')}  type="number" /> ₽</div>
            <div className={styles.inputHolder} ><input value={values.right} onChange={(e)=> handleValue(Number(e.target.value), 'right')}  type="number" /> ₽</div>
        </div>
    </div>
  )
}

export default Price