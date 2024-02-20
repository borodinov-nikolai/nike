'use client'
import React, { useState } from 'react'
import styles from './ProfileRedactor.module.scss'
import { useGetUserQuery } from '@/src/entities/user'
import { FaPen } from "react-icons/fa";
import TextInput from '@/src/shared/ui/textInput';
import { FaSave } from "react-icons/fa";
import { useEditProfileMutation } from '../api';


type Inputs = {
  email?: string,
  login?: string,
  phoneNumber?: string
}




const ProfileRedactor = () => {
  const {data:user} = useGetUserQuery()
  const [fieldData, setFieldData] = useState<Inputs>()
  const [currentInput, setCurrentInput] = useState<number>()
  const [editProfile, data] = useEditProfileMutation()



  const fieldsList = [
    {
      id:1,
      title: 'Логин:',
      property: 'login'
    },
    {
      id:2,
      title: 'Email:',
      property: 'email'
    },
    {
      id:3,
      title: 'Телефон:',
      property: 'phoneNumber'
    },
  ]


  const handleSave = ()=> {

      fieldData && editProfile(fieldData)
    

    setCurrentInput(undefined)
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title} >Редактировать профиль</h2>
      <div className={styles.content} >
        <ul className={styles.fieldsList} >
          {fieldsList.map(({id, title, property})=>{
            return    <div key={id} className={styles.field} >
            <h3 className={styles.fieldTitle} >{title}</h3>
            {user && id !== currentInput && <p className={styles.fieldText} >{user[property]} <FaPen onClick={()=>setCurrentInput(id)} /> </p>}
            {user && id === currentInput && <div className={styles.inputHolder} >
              <TextInput onKeyDown={(e)=>e.key === 'Enter' && handleSave()} onChange={(e)=> setFieldData({[property]: e.target.value})} defaultValue={user[property]} /> <FaSave onClick={handleSave} />
            </div>}
          </div>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProfileRedactor