import { Authorization } from '@/src/features/authorization'
import React from 'react'
import styles from './AuthPage.module.scss'
const page = () => {
  return (
    <div className={styles.root}>
      <Authorization/>
    </div>
  )
}

export default page