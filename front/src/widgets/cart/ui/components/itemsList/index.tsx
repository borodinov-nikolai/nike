import React from 'react'
import styles from './ItemsList.module.scss'


const ItemsList = () => {
  return (
    <div className={styles.root} >
        <div className={styles.grid} >
            <div className={styles.header} ></div>
            <ul className={styles.list} >
                <li className={styles.item} ></li>
            </ul>
        </div>
    </div>
  )
}

export default ItemsList