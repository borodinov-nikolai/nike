import { Controller, SubmitHandler, useForm} from 'react-hook-form'
import styles from './MaterialEditor.module.scss'
import { Input } from 'antd'
import { SubmitButton } from '../../../features/submitButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { DeleteButton } from '../../../features/deleteButton'
import { useAddMaterialMutation, useDeleteMaterialMutation, useGetMaterialQuery, useUpdateMaterialMutation } from '../../../entities/material'


interface Inputs {
    name: string
    value: string
}



export const MaterialEditor = () => {
    const navigate = useNavigate()
    const {edit: params} = useParams()
    const [addItem] = useAddMaterialMutation()
    const [updateItem] = useUpdateMaterialMutation()
    const [deleteItem] = useDeleteMaterialMutation()
    const {data: item} = useGetMaterialQuery(+params!, {skip: params !== 'add' ? false : true})
  const {control, handleSubmit, setValue} = useForm({
     defaultValues: {
         name: '',
      value: '',
     }
  })


  useEffect(()=> {
   if(item) {
    setValue('name', item.name)
    setValue('value', item.value)
   }
  }, [item])

  const onSubmit: SubmitHandler<Inputs> = (data)=> {
         if (params !== 'add') {
            updateItem({id: +params!, data})
         } else {
            addItem(data)
         }
       navigate('/materials')
  }

const handleDelete = ()=> {
    deleteItem(+params!)
    navigate('/materials')
}

  return (
    <div className={styles.root} >
       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formItem} >
            <label htmlFor="name">Имя:</label>
            <Controller
            name='name'
            control={control}
            render={({field}) => <Input id='name' {...field} /> }
            />
        </div>
        <div className={styles.formItem} >
            <label htmlFor="value">Значение:</label>
            <Controller
            name='value'
            control={control}
            render={({field}) => <Input id='value' {...field} /> }
            />
        </div>
        <SubmitButton/>
       </form>
       {params !== 'add' && <DeleteButton onConfirm={handleDelete} />}
    </div>
  )
}
