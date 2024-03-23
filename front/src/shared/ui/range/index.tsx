'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'



interface Props {
    onChange?: (value: {min: number, max:number}) => void
    values?: {min: number, max: number }
}


const Range:FC<Props> = ({onChange}) => {
    const progress = useRef<HTMLInputElement>(null)
    const [values, setValues] = useState<{min: number, max:number}>({min: 2500, max:7500})


    const handleRangeChange = (e: string, input: string) => {
        const value = Number(e)
          if(input === 'min' && value < values.max) {
            setValues({min: value, max: values.max})
          } else if(input === 'max' && value > values.min){
            setValues({min: values.min, max: value})
          }
          onChange && onChange(values)
        };
        
        


    useEffect(() => {
        if (progress.current) {
            const style = progress.current.style
            style.left = values.min / 100 + "%";
            style.right = (100 - values.max / 100) + "%";
            }   
    }, [values]);


    return (


        <div className={styles.root} >
            <div className={styles.slider} >
                <div ref={progress} className={styles.progress} ></div>
            </div>
            <div className={styles.rangeInput}>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    onChange={(e) => handleRangeChange(e.target.value, 'min')}
                    value={values.min}
                    className={styles.rangeMin}
                />
                <input
                    type="range"
                    min="0"
                    max="10000"
                    onChange={(e) => handleRangeChange(e.target.value, 'max')}
                    value={values.max}
                    className={styles.rangeMax}
                />
            </div>
        </div>
    )
}

export default Range