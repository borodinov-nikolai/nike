'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'


const Range = () => {
    const [valueLeft, setValueLeft] = useState<number>(2500);
    const [valueRight, setValueRight] = useState<number>(7500);
    const progress = useRef<HTMLInputElement>(null)



    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, slider: string) => {
        const value = Number(e.target.value);

        if (slider === 'left' && value < valueRight) {
            setValueLeft(value);
        } else if (slider === 'right' && value > valueLeft) {
            setValueRight(value);
        }
    };


    useEffect(() => {
        if (progress.current) {
            const style = progress.current.style
            style.left = valueLeft / 100 + "%";
            style.right = (100 - valueRight / 100) + "%";
            
        }
    }, [valueLeft, valueRight]);

    return (



        <div>
            <div className={styles.slider} >
                <div ref={progress} className={styles.progress} ></div>
            </div>
            <div className={styles.rangeInput}>
                <input
                    type="range"
                    min="0"
                    max="10000"
                    onChange={(e) => handleRangeChange(e, 'left')}
                    value={valueLeft}
                    className={styles.rangeMin}
                />
                <input
                    type="range"
                    min="0"
                    max="10000"
                    onChange={(e) => handleRangeChange(e, 'right')}
                    value={valueRight}
                    className={styles.rangeMax}
                />
            </div>
        </div>
    )
}

export default Range