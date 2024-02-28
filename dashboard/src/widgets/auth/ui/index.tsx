import { useState } from 'react'
import { AuthorizationForm } from '../../../features/authorizationForm'
import { RegistrationForm } from '../../../features/registrationForm'
import styles from './Auth.module.scss'

const Auth = () => {
  const [isAuthorization, setIsAuthorization] = useState<boolean>(true)
  return (
    <div className={styles.root} > 
    <div className={styles.inner + " container"}>
      <div className={styles.content} >
        <h1 className={styles.title} >{isAuthorization ? "Авторизация" : "Регистрация"}</h1>
            {isAuthorization && <div className={styles.formWrapper} ><AuthorizationForm/></div>}
            {!isAuthorization && <div className={styles.formWrapper} ><RegistrationForm/></div>}
            <p onClick={()=> setIsAuthorization(!isAuthorization)} className={styles.toggler}>
             {isAuthorization ? "нет аккаунта? зарегистрируйся":
             "уже есть аккаунт? авторизуйся"
             }
              </p>
      </div>
    </div>
    </div>
  )
}

export default Auth