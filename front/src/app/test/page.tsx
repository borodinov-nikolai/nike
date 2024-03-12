'use client'
import React, { useState } from 'react'
import styles from './TestPage.module.scss'
import Range from '@/src/shared/ui/range'





const page = () => {
   const [values, setValues] = useState<{min: number, max:number}>()
  return (
    <main className={styles.root}>   
         
         <div className='container' > 
         <Range onChange={(values) => setValues(values)} />
         <input defaultValue={values?.min || 2500} type='number ' />   <input defaultValue={values?.max || 7500} type='number ' />
         </div>
       
    </main>

  )
}

export default page