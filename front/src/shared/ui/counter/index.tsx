'use client'
import React, { FC, useEffect, useState } from 'react'
import styles from './Counter.module.scss'

interface IProps {
    value?: number
    onChange?: (value: number)=> void
    onMinusClik?: ()=> void 
    onPlusClik?: ()=> void 
}

const Counter:FC<IProps> = ({value, onChange, onMinusClik, onPlusClik}) => {
    const [count, setCount] = useState<number>(1)


    const handleCountChange = (name: 'plus'|'minus')=> {
       const updatedValue = name === 'plus' ? (count < 99? count + 1 : count) : (count > 1 ? count - 1 : count)
       setCount(updatedValue)
       onChange && onChange(updatedValue)
    }

    useEffect(()=> {
      value && setCount(Math.max(Math.min(value, 99), 1))
    }, [value])

  return (
    <div className={styles.root} >
        <div onClick={()=>{ handleCountChange('minus'); onMinusClik && onMinusClik()}} className={styles.btn} >-</div>
        <div className={styles.count}>{count}</div>
        <div onClick={()=>{ handleCountChange('plus'); onPlusClik && onPlusClik() }} className={styles.btn} >+</div>
    </div>
  )
}

export default Counter