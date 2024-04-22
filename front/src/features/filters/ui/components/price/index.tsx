'use client'
import React, { useEffect, useState } from 'react'
import styles from './Price.module.scss'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setPrice } from '../../../store/filtersSlice'
import { Slider } from 'antd'


const Price = () => {
  const dispatch = useAppDispatch()
  const { price } = useAppSelector((state) => state.filters)
  const [inputsValue, setInputsValue] = useState<number[]>([0, 10000])
  const [rangeValue, setRangeValue] = useState<number[]>([0, 10000])

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const pattern = /[0-9]/;

    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleInputPrice = (value: number, name: string) => {
    if (name === 'min') {
      const newValue = Math.min(Math.max(value, 0), inputsValue[1])
      dispatch(setPrice([newValue, price[1]]))
      setRangeValue([newValue, price[1]])
    }
    if (name === 'max') {
      const newValue = Math.min(Math.max(value, inputsValue[0]), 10000)
      dispatch(setPrice([price[0], newValue]))
      setRangeValue([price[0], newValue])
    }
  }

  const handleRangeChange = (value: number[]) => {
    setRangeValue(value)
    setInputsValue(value)
    dispatch(setPrice(value))
    
  }

  useEffect(() => {
    setInputsValue(price)
  }, [price])

  return (

    <div className={styles.root} >
      <h3 className={styles.name} >Цена:</h3>
      <div className={styles.rangeHolder} >
          <Slider  max={10000} value={rangeValue} onChange={handleRangeChange} step={100} min={0} className={styles.range} range defaultValue={[2500, 7500]} />
      </div>
      <div className={styles.inputsHolder}>
        <input value={inputsValue[0]} onChange={(e) => setInputsValue([+e.target.value, inputsValue[1]])} onBlur={(e) => handleInputPrice(+e.target.value, 'min')} onKeyPress={handleKeyPress} type="text" />
        <input value={inputsValue[1]} onChange={(e) => setInputsValue([inputsValue[0], +e.target.value])} onBlur={(e) => handleInputPrice(+e.target.value, 'max')} onKeyPress={handleKeyPress} type="text" />
      </div>
    </div>

  )
}

export default Price