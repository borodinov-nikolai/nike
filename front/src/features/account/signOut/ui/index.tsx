'use client'
import React from 'react'
import styles from './SignOut.module.scss'
import Button from '@/src/shared/ui/button'
import { useRouter } from 'next/navigation'
import { useSignOutMutation } from '../api'


const SignOut = () => {
    const router = useRouter()
    const [signOut] = useSignOutMutation()

    const handleClick = ()=> {
        localStorage.removeItem('jwt')
        localStorage.removeItem('accountNavbarValue')
        signOut()
   router.push('/')
    }

  return (
    <div className={styles.root} >
        <h2 className={styles.title} >Выйти из аккаунта</h2>
        <div className={styles.content} >
        <Button onClick={handleClick} >Выйти</Button>
        </div>
      
    </div>
  )
}

export default SignOut