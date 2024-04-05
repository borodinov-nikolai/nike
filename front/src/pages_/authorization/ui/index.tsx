import { Authorization } from '@/src/features/authorization'
import React from 'react'
import styles from './AuthPage.module.scss'

export const AuthorizationPage = () => {
  return (
    <main className={styles.root}>
      <section><Authorization/></section>
    </main>
  )
}
