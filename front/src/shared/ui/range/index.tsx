'use client'
import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './Range.module.scss'



interface Props {
    onChange?: (value: { min: number, max: number }) => void
    handleValues?: { min: number, max: number }
}


const Range: FC<Props> = ({ onChange}) => {
    const progress = useRef<HTMLInputElement>(null)
    const [rangeValueMin, setRangeValueMin] = useState<number>(2500)
    const [rangeValueMax, setRangeValueMax] = useState<number>(7500)
    const [inputValueMin, setInputValueMin] = useState<number>(2500)
    const [inputValueMax, setInputValueMax] = useState<number>(7500)
    const inputMinRef = useRef<HTMLInputElement>(null)
    const inputMaxRef = useRef<HTMLInputElement>(null)

    

    const handleRangeChange = (e: string, input: string) => {
        const value = Number(e)


        if (input === 'min' && value < rangeValueMax) {
         
         setRangeValueMin(value);
         setInputValueMin(value);
        }
        else if (input === 'max' && value > rangeValueMin) {
           setRangeValueMax(value)
           setInputValueMax(value)
        }
      

    };


useEffect(()=> {
    if (onChange) {
        onChange({ min: rangeValueMin, max: rangeValueMax })
    }
}, [rangeValueMin, rangeValueMax])




        const handleMinInput = () => {

            if (inputMinRef.current && !isNaN(+inputMinRef.current.value)) {
                const value = +inputMinRef.current.value
                const newValue = Math.max(Math.min(value, inputValueMax), 0)
                setInputValueMin(newValue)
                setRangeValueMin(newValue)
            }
        }



    const handleMaxInput = () => {
        if (inputMaxRef.current && !isNaN(+inputMaxRef.current.value)) {
            const value = +inputMaxRef.current.value
            const newValue = Math.min(Math.max(value, inputValueMin), 10000)
            setInputValueMax(newValue)
            setRangeValueMax(newValue)
        }
    }


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const pattern = /[0-9]/;
    
        if (!pattern.test(event.key)) {
            event.preventDefault();
        }
    };


    useEffect(() => {
        if (progress.current) {
            const style = progress.current.style
            style.left = rangeValueMin/100 + "%";
            style.right = (100 - (rangeValueMax/100) ) + "%";
        }
    }, [rangeValueMin, rangeValueMax]);

 


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
                        max="10000"
                        onChange={(e) => handleRangeChange(e.target.value, 'min')}
                        value={rangeValueMin}
                        className={styles.rangeMin}
                    />
                    <input
                        type="range"
                        min="0"
                        max="10000"
                        onChange={(e) => handleRangeChange(e.target.value, 'max')}
                        value={rangeValueMax}
                        className={styles.rangeMax}
                    />
                </div>
            </div>
            <div className={styles.numberInputs} >
                <div className={styles.input} ><input ref={inputMinRef} onBlur={handleMinInput} onChange={(e) => setInputValueMin(+e.target.value)} onKeyPress={handleKeyPress} type="text" value={inputValueMin} /> ₽</div>
                <div className={styles.input} ><input ref={inputMaxRef} onBlur={handleMaxInput} onChange={(e) => setInputValueMax(+e.target.value)}  onKeyPress={handleKeyPress} type="text" value={inputValueMax} /> ₽</div>

            </div>
        </div>
    )
}

export default Range