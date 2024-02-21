import { Registration } from '@/src/features/registration'
import React from 'react'
import styles from './RegistrationPage.module.scss'


const page = () => {
  return (
    <main className={styles.root} >
        <section><Registration/></section>
    </main>
  )
}

export default page