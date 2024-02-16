import { Registration } from '@/src/features/registration'
import React from 'react'
import styles from './RegistrationPage.module.scss'


const page = () => {
  return (
    <div className={styles.root} >
        <Registration/>
    </div>
  )
}

export default page