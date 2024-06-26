import React from 'react'
import styles from './AccountPage.module.scss'
import { Account } from '@/src/widgets/account'
import Breadcrumb from '@/src/shared/ui/breadcrumb'






export const AccountPage = () => {

  const breadcrumbs = [
  {
    label: 'Личный кабинет',
    url: '/account'
  }
  ]
  
  return (
    <main className={styles.root} >
      <div className='container' >
        <Breadcrumb items={breadcrumbs} />
     <Account/>
     </div>
    </main>
  )
}
    
