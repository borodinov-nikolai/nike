
import Button from '../../../shared/ui/button';
import PasswordInput from '../../../shared/ui/passwordInput';
import TextInput from '../../../shared/ui/textInput';
import styles from './AuthorizationForm.module.scss';
import { Controller, useForm } from 'react-hook-form';






const AuthorizationForm = () => {
    const {control, handleSubmit, setError, formState: { errors }} = useForm()
  return (
    <form className={styles.root} >
      <div className={styles.formItems} >
        <div className={styles.formItem} >
          <label className={styles.label}  htmlFor="email">Введите email</label>
          <Controller
          name='email'
          control={control}
            render={({field})=><TextInput {...field} id='email' />}
          />
        </div>
        <div  className={styles.formItem} >
          <label className={styles.label} htmlFor="password">Введите пароль</label>
          <Controller
             name='password'
             control={control}
               render={({field})=><PasswordInput {...field} id='password' />}
          />
        </div>
      </div>
      <div className={styles.button} >
        <Button type="submit" >войти</Button>
      </div>

    </form>
  )
}

export default AuthorizationForm