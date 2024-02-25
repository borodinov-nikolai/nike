
import PasswordInput from '../../../shared/ui/passwordInput';
import TextInput from '../../../shared/ui/textInput';
import styles from './AuthorizationForm.module.scss';
import { Controller, useForm } from 'react-hook-form';






const AuthorizationForm = () => {
    const {control, handleSubmit, setError, formState: { errors }} = useForm()
  return (
    <form className={styles.root} >
      <div>
        <label htmlFor="email"></label>
        <Controller
        name='email'
        control={control}
          render={({field})=><TextInput {...field} id='email' />}
        />
      </div>

      <Controller
         name='password'
         control={control}
           render={({field})=><PasswordInput {...field} id='password' />}
      />

    </form>
  )
}

export default AuthorizationForm