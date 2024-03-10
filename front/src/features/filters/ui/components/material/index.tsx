import React from 'react'
import styles from './Material.module.scss'
import Dropdown from '@/src/shared/ui/dropdown'


const Material = () => {
  return (
    <div className={styles.root} >
        <Dropdown name='Материал' >
            <div></div>
        </Dropdown>
    </div>
  )
}

export default Material