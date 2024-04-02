'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'



interface Props {
    onChange?: ([]) => void
    value?: number[]
}


const Range: FC<Props> = ({ onChange, value }) => {
    const progress = useRef<HTMLInputElement>(null)
    const [rangeValue, setRangeValue] = useState<number[]>([0, 100])



    const handleRangeChange = (e: string, input: string) => {
        const inputValue = Number(e)
        if (input === 'min' && inputValue < rangeValue[1]) {
            const newValue = [inputValue, rangeValue[1]]
            setRangeValue(newValue)
            onChange && onChange(newValue)
        }
        else if (input === 'max' && inputValue > rangeValue[0]) {
            const newValue = [rangeValue[0], inputValue]
            setRangeValue(newValue)
            onChange && onChange(newValue)
        }
    };


    useEffect(() => {
        if (progress.current) {
            const style = progress.current.style
            style.left = rangeValue[0] + "%";
            style.right = (100 - (rangeValue[1])) + "%";
        }
    }, [rangeValue]);



    useEffect(() => {
        if (value) {
            setRangeValue(value)
        }
    }, [value])

    return (


        <div className={styles.root} >
            <div className={styles.range} >
                <div className={styles.slider} >
                    <div ref={progress} className={styles.progress} ></div>
                </div>
                <div className={styles.rangeInput}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        onChange={(e) => handleRangeChange(e.target.value, 'min')}
                        value={rangeValue[0]}
                        className={styles.rangeMin}
                    />
                    <input
                        type="range"
                        min="0"
                        max="100"
                        onChange={(e) => handleRangeChange(e.target.value, 'max')}
                        value={rangeValue[1]}
                        className={styles.rangeMax}
                    />
                </div>
            </div>
        </div>
    )
}

export default Range