'use client'
import React, { useState } from 'react'
import styles from './Registration.module.scss'
import TextInput from '@/src/shared/ui/textInput'
import Image from 'next/image'
import Button from '@/src/shared/ui/button'
import Checkbox from '@/src/shared/ui/checkbox'
import Link from 'next/link'


const Registration = () => {
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
  
  
  
    // const handleIdentifier = (e: string)=> {
    //   setIdentifier(e)
    // }
    // const handlePassword = (e: string)=> {
    //   setPassword(e) 
    // }
    
    // const submit = (e:React.FormEvent<HTMLFormElement>)=> {
    //   e.preventDefault()
    //   if(identifier && password) {
    //     registrationApi({identifier, password})
    //   }
    // }
  
    // console.log(result.data)
    // console.log(password, identifier)
  return (
    <div className={styles.root} >
    <div className={'container'} >
      <h1 className={styles.title} >Регистрация</h1>
      <div className={styles.borderBlock} >
      <form className={styles.form} action="">
        <div className={styles.form_item} >
          <label htmlFor='email' className={styles.label} >Email</label>
          <TextInput   className={styles.input} id='email' placeholder={'Введите email адрес'} />
          </div>
        <div className={styles.form_item} >
          <label htmlFor='fullName' className={styles.label}>ФИО</label>
          <TextInput  className={styles.input} id='fullName' type={'text'} placeholder={'Ваше полное имя'} />
          </div>
        <div className={styles.form_item} >
          <label htmlFor='phoneNumber' className={styles.label}>Номер телефона</label>
          <TextInput  className={styles.input} id='phoneNumber' type={'text'} placeholder={'+7 (___) ___ - ___ - ___'} />
          </div>
        <div className={styles.form_item} >
          <label htmlFor='password' className={styles.label}>Пароль</label>
          <div className={styles.password_input} >
          <TextInput  className={styles.input} id='password' type={'password'} placeholder={'Придумайте пароль'} />
           <Image className={styles.password_inputImage} src={'/icons/eye.png'} width={18} height={12} alt='eye icon' />
          </div>
          </div>
        <div className={styles.form_item} >
          <label htmlFor='password' className={styles.label}>Повторите пароль</label>
          <div className={styles.password_input} >
          <TextInput  className={styles.input} id='password' type={'password'} placeholder={'Придумайте пароль'} />
           <Image className={styles.password_inputImage} src={'/icons/eye.png'} width={18} height={12} alt='eye icon' />
          </div>
          </div>

       
       <div className={styles.rememberMe} >
        <div><Checkbox/></div>
        <p>Я соглашаюсь на обработку персональных данных в соответствии с <Link href={'#'}>политикой конфиденциальности</Link></p>
       </div>
       <div  className={styles.submitBtn}><Button type='submit' >Создать аккаунт</Button></div>

      </form>
       <div className={styles.toRegistration} > 
           <div className={styles.toRegistration_block} >
            <div className={styles.toRegistration_header} >
              <Image className={styles.toRegistration_icon} src={'/icons/add_user.png'} width={38} height={45} alt='icon add user' />
              <h2>Уже есть аккаунт?
              </h2>
            </div>
            <p>
              Перейдите к <span>авторизации</span> если у вас уже есть зарегистрированный аккаунт.</p>
            <Link href={'/authorization'}>
              <Button variant={'secondary'}>Авторизоваться
              </Button>
            </Link>
           </div>
       </div>
      </div>
  
    </div>
  </div>
  )
}

export default Registration