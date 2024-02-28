import { Navigate } from "react-router-dom"
import { useGetUserQuery } from "../../features/user"
import { Auth } from "../../widgets/auth"
import styles from './AuthPage.module.scss'






const AuthPage = () => {
const {data: user, isLoading, status} = useGetUserQuery()
 


if(!isLoading && !user ) {
    return <div className={styles.root}>{<Auth/>}</div>
} 

if(!isLoading && user) {
    return <Navigate to='/' replace={true} />
}

return null

}

export default AuthPage