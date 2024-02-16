import React from 'react'
import styles from './AccountPage.module.scss'
import { Account } from '@/src/widgets/account'
import Breadcrumb from '@/src/shared/ui/breadcrumb'






const page = () => {

  const breadcrumbs = [
  {
    label: 'Личный кабинет',
    url: '/account'
  }
  ]
  
  return (
    <main className={styles.root} >
      <div className='container' >
      <div className={styles.breadcrumb} >
        <Breadcrumb items={breadcrumbs} />
      </div>
     <Account/>
     </div>
    </main>
  )
}
    
export default page