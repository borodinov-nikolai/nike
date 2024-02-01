'use client'
import React, { useState } from 'react'
import styles from './Checkbox.module.scss'



const Checkbox = () => {

  return (
  <label className={styles.root} >
      
        <input className={styles.originalCheckbox} type='checkbox' ></input>
        <span className={styles.customCheckbox}></span>
  </label>
  )
}

export default Checkbox