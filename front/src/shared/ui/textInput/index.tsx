'use client'
import React, { FC } from 'react'
import styles from './TextInput.module.scss'

interface Props {
  placeholder?: string
  type?: 'text' | 'password'
  className?: string
 [key:string]: any
}

const TextInput: FC<Props> = ({placeholder, type='text', className, ...props}) => {


  return (
        <input type={type} {...props}  placeholder={placeholder}
         className={[styles.root, className].filter(Boolean).join(' ')}></input>
  )
}

export default TextInput