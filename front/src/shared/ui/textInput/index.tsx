'use client'
import React, { FC } from 'react'
import styles from './TextInput.module.scss'

interface Props {
  placeholder?: string
  type?: 'text' | 'password'
  className?: string
  onChange?: (e:React.ChangeEvent<HTMLInputElement>)=> void
 [key:string]: any
}

const TextInput: FC<Props> = React.forwardRef(({placeholder, type='text', className, ...props},  ref: React.LegacyRef<HTMLInputElement> | undefined,) => {


  return (
        <input type={type} {...props}  placeholder={placeholder}
         className={[styles.root, className].filter(Boolean).join(' ')}></input>
  )
})



export default TextInput