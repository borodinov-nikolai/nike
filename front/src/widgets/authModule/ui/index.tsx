import React from 'react'
import styles from './AuthModule.module.scss';
import TextInput from '@/src/shared/ui/textInput';
import Image from 'next/image';
import Button from '@/src/shared/ui/button';
import Checkbox from '@/src/shared/ui/checkbox';


const AuthModule = () => {
  return (
    <div className={styles.root} >
      <div className={'container'} >
        <h1 className={styles.title} >Авторизация</h1>
        <div className={styles.borderBlock} >
        <form className={styles.form} action="">
          <div className={styles.form_item} >
            <label htmlFor='email' className={styles.label} >Email или логин</label>
            <TextInput className={styles.input} id='email' placeholder={'Введите данные для авторизации'} />
            </div>
          <div className={styles.form_item} >
            <label htmlFor='password' className={styles.label}>Пароль</label>
            <div className={styles.password_input} >
            <TextInput className={styles.input} id='password' type={'password'} placeholder={'Введите пароль от аккаунта'} />
             <Image className={styles.password_inputImage} src={'/icons/eye.png'} width={18} height={12} alt='eye icon' />
            </div>
            </div>

            <div className={styles.resetPassword} >
              <p>Восстановить пароль</p>
              </div>
         <Button type={'submit'} className={styles.submitBtn}>Войти в кабинет</Button>

         <div className={styles.rememberMe} >
          <Checkbox/>
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
              <Button variant={'secondary'}>Зарегистрироваться
              </Button>
             </div>
         </div>
        </div>
    
      </div>
    </div>
  )
}

export default AuthModule