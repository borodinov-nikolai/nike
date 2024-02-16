'use client'
import React from 'react'
import styles from './Registration.module.scss'
import TextInput from '@/src/shared/ui/textInput'
import Image from 'next/image'
import Button from '@/src/shared/ui/button'
import Checkbox from '@/src/shared/ui/checkbox'
import Link from 'next/link'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useRegistrationMutation } from '../api'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/navigation'
import PasswordInput from '@/src/shared/ui/passwordInput'


type Inputs = {

  email: string,
  login: string,
  phoneNumber: string,
  password: string,
  password_confirm: string
}

const Registration = () => {
  const [registration, result] = useRegistrationMutation()
  const router = useRouter()
  const { control, setError, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      email: '',
      login: '',
      phoneNumber: '',
      password: '',
      password_confirm: ''
    }
  });


  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const { password_confirm, ...body } = data
    const res = await registration(body)
    if("error" in res){
      const error = res.error as FetchBaseQueryError
      const {message} = error.data as {message: string}
  
       if( message === "User with this email already exists"){
          setError('email', {
            type: 'manual',
            message: 'Пользователь с таким email уже существует'
          })
       }
      }

      if("data" in res) {
        localStorage.setItem('jwt', res.data.accessToken
        )
       router.push('/')
      }
 
    }
 

  return (
    <div className={styles.root} >
      <div className={'container'} >
        <h1 className={styles.title} >Регистрация</h1>
        <div className={styles.borderBlock} >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action="">
            <div className={styles.form_item} >
              <label htmlFor='email' className={styles.label} >Email</label>


              <Controller
                name="email"
                control={control}
                rules={{ required: "это поле обязательно", pattern: { value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, message: 'пожалуйста введите корректный email' } }}
                render={({ field }) => <TextInput type='text' id='email' placeholder={'введите email адрес'} className={styles.input} {...field} />}
              />
             {errors.email && <span className={styles.error} >{errors.email?.message}</span>}

            </div>
            <div className={styles.form_item} >
              <label htmlFor='login' className={styles.label}>Введиет логин</label>


              <Controller
                name="login"
                control={control}
                rules={{ required: "это поле обязательно" }}
                render={({ field }) => <TextInput className={styles.input} id='login' type={'text'} placeholder={'Ваш логин'} {...field} />}
              />

             {errors.login && <span className={styles.error} >{errors.login?.message}</span>} 
            </div>
            <div className={styles.form_item} >
              <label htmlFor='phoneNumber' className={styles.label}>Номер телефона</label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "это поле обязательно" }}
                render={({ field }) => <TextInput  {...field} className={styles.input} id='phoneNumber' type={'text'} placeholder={'+7 (___) ___ - ___ - ___'} />}
              />
               {errors.phoneNumber && <span className={styles.error} >{errors.phoneNumber?.message}</span>}

            </div>
            <div className={styles.form_item} >
              <label htmlFor='password' className={styles.label}>Пароль</label>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "это поле обязательно", minLength: { value: 4, message: 'длина должна быть не менее 4 символов' }, maxLength: { value: 8, message: 'длина должна быть не более 8 символов' } }}
                  render={({ field }) => <PasswordInput {...field} className={styles.input} id='password' type={'password'} placeholder={'Придумайте пароль'} />}
                />
                {errors.password && <span className={styles.error} >{errors.password?.message}</span>}
       
            </div>
            <div className={styles.form_item} >
              <label htmlFor='password_confirm' className={styles.label}>Повторите пароль</label>
                <Controller
                  name="password_confirm"
                  control={control}
                  rules={{
                    required: "это поле обязательно",
                    minLength: { value: 4, message: 'длина должна быть не менее 4 символов' },
                    maxLength: { value: 8, message: 'длина должна быть не более 8 символов' },
                    validate: (value)=>value === watch('password') || 'Пароли не совпадают'
                  }}
                  render={({ field }) => <PasswordInput {...field} className={styles.input} id='password_confirm' type={'password'} placeholder={'Повторите пароль'} />}
                />
                 {errors.password_confirm && <span className={styles.error} >{errors.password_confirm?.message}</span>}

             
            </div>


            <div className={styles.rememberMe} >
              <div>

                <Checkbox />
              </div>
              <p>Я соглашаюсь на обработку персональных данных в соответствии с <Link href={'#'}>политикой конфиденциальности</Link></p>
            </div>
            <div className={styles.submitBtn}><Button type='submit' >Создать аккаунт</Button></div>

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