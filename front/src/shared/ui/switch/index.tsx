import React from 'react'
import styles from './Switch.module.scss';


const Switch = () => {
  return (
     <label className={styles.root}>
      <input  type='checkbox'  className={styles.originalInput}></input>
      <span className={styles.customInput} ></span>
     </label>
  )
}

export default Switch