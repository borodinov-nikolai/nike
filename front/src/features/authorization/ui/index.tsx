'use client'
import React from 'react'
import styles from './Authorization.module.scss';
import TextInput from '@/src/shared/ui/textInput';
import Button from '@/src/shared/ui/button';
import Checkbox from '@/src/shared/ui/checkbox';
import Link from 'next/link';
import { useAutorizationMutation } from '../api';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import Image from 'next/image';
import PasswordInput from '@/src/shared/ui/passwordInput';


interface Inputs {
  email: string
  password: string
}

const Authorization = () => {
  const [authorization, result] = useAutorizationMutation()
  const { control, handleSubmit, setError, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const res = await authorization(data)
    if ("error" in res) {
      const error = res.error as FetchBaseQueryError
      const {message} = error.data as {message: string}
     if(message === 'user with this email not found'){
      setError("email", {
        type: "manual",
        message: 'Пользователь с таким email не существует'
      })
     }
     if(message === 'wrong password'){
      setError("password", {
        type: "manual",
        message: 'Неправильный пароль'
      })
     }

    
    }

    if("data" in res) {
        await new Promise<void>((resolve)=> {
          localStorage.setItem('jwt', res.data.accessToken) 
          resolve()
        })
         window.location.href ='/'
    }
  }

  return (
    <div className={styles.root} >
      <div className={'container'} >
        <h1 className={styles.title} >Авторизация</h1>
        <div className={styles.borderBlock} >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
            <div className={styles.form_item} >
              <label htmlFor='email' className={styles.label} >Email или логин</label>
              <Controller
                name={'email'}
                control={control}
                rules={{ required: "это поле обязательно", pattern: { value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: 'пожалуйста введите корректный email' } }}
                render={({ field }) => <TextInput {...field} className={styles.input} id='email' placeholder={'Введите данные для авторизации'} />}
                />
             {errors.email && <span className={styles.error} >{errors.email?.message}</span>}
                </div>
            <div className={styles.form_item} >
              <label htmlFor='password' className={styles.label}>Пароль</label>
                <Controller
                  name={'password'}
                  control={control}
                  rules={{ required: "это поле обязательно", minLength: { value: 4, message: 'длина должна быть не менее 4 символов' }, maxLength: { value: 8, message: 'длина должна быть не более 8 символов' } }}
                  render={({ field }) => <PasswordInput {...field} className={styles.input} id='password' type={'password'} placeholder={'Введите пароль от аккаунта'} />}
                />
                {errors.password && <span className={styles.error} >{errors.password?.message}</span>}
            </div>

            <div className={styles.resetPassword} >
              <Link href={'#'} >Восстановить пароль</Link>
            </div>
            <div className={styles.submitBtn} ><Button type='submit'>Войти в кабинет</Button></div>

            <div className={styles.rememberMe} >
              <Checkbox />
              <p>Запомнить меня</p>
            </div>
          </form>
          <div className={styles.toRegistration} >
            <div className={styles.toRegistration_block} >
              <div className={styles.toRegistration_header} >
                <Image className={styles.toRegistration_icon} src={'/icons/add_user.png'} width={38} height={45} alt='icon add user' />
                <h2>Еще нет аккаунта?
                </h2>
              </div>
              <p>
                <span>Регистрация на сайте</span> позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись. Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.</p>
              <Link href={'/registration'}>
                <Button variant={'secondary'}>Зарегистрироваться
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authorization