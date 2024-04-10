import { Button, Popconfirm } from 'antd'
import React, { FC } from 'react'
import styles from './DeleteButton.module.scss'

interface Props {
    onConfirm: ()=> void
}

export const DeleteButton: FC<Props> = ({onConfirm}) => {
  return (
    <Popconfirm
    title="Удаление"
    description="Вы уверены что хотите удалить эту запись?"
    onConfirm={onConfirm}
    okText="Да"
    cancelText="Нет"
  >
        <Button danger type='primary' className={styles.deleteBtn} >Удалить</Button>
        </Popconfirm>
  )
}
