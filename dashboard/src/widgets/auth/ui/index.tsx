

import { AuthorizationForm } from '../../../features/authorizationForm'
import styles from './Auth.module.scss'

const Auth = () => {
  return (
    <div className={styles.root} > 
    <div className={styles.inner + " container"}>
      <h2>Auth</h2>
          <div><AuthorizationForm/></div>
    </div>
    </div>
  )
}

export default Auth