'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'



interface Props {
    setValues: (value: number, input: string) => void,
    values: {min: number, max: number }
}


const Range:FC<Props> = ({setValues, values={min: 2500, max: 7500}}) => {
    const progress = useRef<HTMLInputElement>(null)



    const handleRangeChange = (e: string, input: string) => {
           setValues(Number(e), input)
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