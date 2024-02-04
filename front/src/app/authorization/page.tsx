import { Authorization } from '@/src/features/authorization'
import React from 'react'
import styles from './AuthPage.module.scss'
const page = () => {
  return (
    <main className={styles.root}>
      <Authorization/>
    </main>
  )
}

export default page