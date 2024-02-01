'use client'
import React from 'react'
import styles from './RadioButton.module.scss'


const RadioButton = () => {
  return (
   
        <label className={styles.root} >
          <input className={styles.original} type='radio' ></input>
          <span className={styles.custom} ></span>
        </label>
      
     
  )
}

export default RadioButton