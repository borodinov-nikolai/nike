import { Registration } from '@/src/features/registration'
import React from 'react'
import styles from './RegistrationPage.module.scss'


const page = () => {
  return (
    <main className={styles.root} >
        <Registration/>
    </main>
  )
}

export default page