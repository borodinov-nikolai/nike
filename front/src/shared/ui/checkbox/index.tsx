'use client'
import React, { FC, useState } from 'react'
import styles from './Checkbox.module.scss'



interface Props {
  [key: string]: any;
}

const Checkbox:FC<Props> = React.forwardRef(({...props},  ref: React.LegacyRef<HTMLInputElement> | undefined) => {

  return (
  <label className={styles.root} >
      
        <input {...props} className={styles.originalCheckbox} type='checkbox' ></input>
        <span className={styles.customCheckbox}></span>
  </label>
  )
})



Checkbox.displayName = "Checkbox"

export default Checkbox