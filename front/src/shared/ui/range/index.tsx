'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'



interface Props {
    setValues: React.Dispatch<React.SetStateAction<{
        left: number;
        right: number;
    }>>,
    values: {left: number, right: number }
}


const Range:FC<Props> = ({setValues, values={left: 2500, right: 7500}}) => {
    const progress = useRef<HTMLInputElement>(null)



    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, slider: string) => {
        const value = Number(e.target.value);

        if (slider === 'left' && value < values.right) {
            setValues({left:value, right: values.right});
        } else if (slider === 'right' && value > values.left) {
            setValues({right:value, left: values.left});
        }
    };





    useEffect(() => {
        if (progress.current) {
            const style = progress.current.style
            style.left = values.left / 100 + "%";
            style.right = (100 - values.right / 100) + "%";
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
                    onChange={(e) => handleRangeChange(e, 'left')}
                    value={values.left}
                    className={styles.rangeMin}
                />
                <input
                    type="range"
                    min="0"
                    max="10000"
                    onChange={(e) => handleRangeChange(e, 'right')}
                    value={values.right}
                    className={styles.rangeMax}
                />
            </div>
        </div>
    )
}

export default Range