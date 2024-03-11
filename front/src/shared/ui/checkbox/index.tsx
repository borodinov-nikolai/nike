'use client'
import React, { FC, useState } from 'react'
import styles from './Checkbox.module.scss'



interface Props {
  checked?: boolean
  [key: string]: any
}

const Checkbox:FC<Props> = React.forwardRef(({checked=false, ...props},  ref: React.LegacyRef<HTMLInputElement> | undefined) => {

  return (
  <label className={styles.root} >
      
        <input onChange={()=>null} {...props} className={styles.originalCheckbox} type='checkbox' checked={checked} ></input>
        <span className={styles.customCheckbox}></span>
  </label>
  )
})



Checkbox.displayName = "Checkbox"

export default Checkbox