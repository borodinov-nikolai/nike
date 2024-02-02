'use client'
import React, { useState } from 'react'
import styles from './TestPage.module.scss'
import { useGetUserQuery, usePostUserMutation } from './api/auth'




const page = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [authApi, result] = usePostUserMutation()
    const {data: users} = useGetUserQuery()
 
    console.log(result.data)
 console.log(users)


    const query = () => {
        if(email && password) {
          authApi({email, password})
        }

    }

    const handleEmail = (e:string)=> {
       setEmail(e)
    }

    const handlePassword = (e:string)=> {
      setPassword(e)
    }
 

  return (
    <main className={styles.root}>   
    <div className='container' >
      <form className={styles.form} action="">
       <label> Введите email </label>
       <input onChange={(e)=> handleEmail(e.target.value)}  type="text" />
       <label> Введите пароль </label>
       <input onChange={(e)=> handlePassword(e.target.value)} type="text" />
      </form>
         <button onClick={query} > отправить</button>
         <ul className={styles.userList} >
             {
              users?.map((user)=> {
                  return <li key={user.id} >{user.email}</li>
              })
             }
         </ul>
    </div>
    </main>

  )
}

export default page