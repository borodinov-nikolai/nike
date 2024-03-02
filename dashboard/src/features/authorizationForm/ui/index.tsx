
import { useNavigate } from 'react-router-dom';
import Button from '../../../shared/ui/button';
import PasswordInput from '../../../shared/ui/passwordInput';
import TextInput from '../../../shared/ui/textInput';
import { useAuthorizationMutation } from '../api';
import styles from './AuthorizationForm.module.scss';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useGetUserQuery } from '../../../entities/user';



interface Inputs {
  email: string
  password: string
}


const AuthorizationForm = () => {
    const {control, handleSubmit, setError, formState: { errors }} = useForm({
      defaultValues: {
        email: '',
        password: ''
      }
    })
    const [authorization, result] = useAuthorizationMutation()




    const onSubmit: SubmitHandler<Inputs> = async (data)=> {
      const res = await authorization(data)
      if("data" in res){
         localStorage.setItem('jwt', res.data.accessToken);
        window.location.href ='/admin'
      } 
      if('error' in res){
        console.log(res.error)
      }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root} >
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