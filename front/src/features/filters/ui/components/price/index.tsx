'use client'
import React, { useEffect, useState } from 'react'
import styles from './Price.module.scss'
import Range from '@/src/shared/ui/range'
import { useAppDispatch, useAppSelector } from '@/src/shared/store/hooks'
import { setPrice } from '../../../store/filtersSlice'
import { ConfigProvider, Slider } from 'antd'


const Price = () => {
    const dispatch = useAppDispatch()
    const {price} = useAppSelector((state)=> state.filters)
    const [inputsValue, setInputsValue] = useState<number[]>([0, 10000])
   
   
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      const pattern = /[0-9]/;
  
      if (!pattern.test(event.key)) {
          event.preventDefault();
      }
  };
   

  const handleInputPrice = (value: number, name: string)=> {
      if(name === 'min') {
        const newValue =  Math.min(Math.max(value, 0), inputsValue[1])
        dispatch(setPrice([newValue, price[1]]))
      }
      if(name === 'max') {
        const newValue = Math.min(Math.max(value, inputsValue[0]), 10000)
        dispatch(setPrice([price[0], newValue]))
      }
  }


  useEffect(()=> {
      setInputsValue(price)
  },[price])

  return (
   
      <div className={styles.root} >
         <ConfigProvider theme={{
      components: {
        Slider: {
          dotSize: 40
        }
      }
    }} >
          <h3 className={styles.name} >Цена:</h3>
         <div className={styles.rangeHolder} >
           {/* <Range value={[price[0]/100, price[1]/100]} onChange={(value)=> {dispatch(setPrice([value[0]*100, value[1]*100]))}}/> */}
           <Slider range defaultValue={[25,75]} />
         </div>
         <div className={styles.inputsHolder}>
          <input value={inputsValue[0]} onChange={(e)=> setInputsValue([+e.target.value, inputsValue[1]])} onBlur={(e) => handleInputPrice(+e.target.value, 'min')} onKeyPress={handleKeyPress} type="text" />
          <input value={inputsValue[1]} onChange={(e)=> setInputsValue([inputsValue[0], +e.target.value])} onBlur={(e) => handleInputPrice(+e.target.value, 'max')} onKeyPress={handleKeyPress} type="text" />
         </div>
         </ConfigProvider>
      </div>

  )
}

export default Price