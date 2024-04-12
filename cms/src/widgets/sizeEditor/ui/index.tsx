import { Controller, SubmitHandler, useForm} from 'react-hook-form'
import styles from './SizeEditor.module.scss'
import { Input } from 'antd'
import { SubmitButton } from '../../../features/submitButton'
import { useAddSizeMutation, useDeleteSizeMutation, useGetSizeQuery, useUpdateSizeMutation } from '../../../entities/size'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { DeleteButton } from '../../../features/deleteButton'


interface Inputs {
    value: string
}



export const SizeEditor = () => {
    const navigate = useNavigate()
    const {edit: params} = useParams()
    const [addItem] = useAddSizeMutation()
    const [updateItem] = useUpdateSizeMutation()
    const [deleteItem] = useDeleteSizeMutation()
    const {data: item} = useGetSizeQuery(+params!, {skip: params !== 'add' ? false : true})
  const {control, handleSubmit, setValue} = useForm({
     defaultValues: {
      value: ''
     }
  })


  useEffect(()=> {
   if(item) {
    setValue('value', item.value)
   }
  }, [item])

  const onSubmit: SubmitHandler<Inputs> = (data)=> {
         if (params !== 'add') {
            updateItem({id: +params!, data})
         } else {
            addItem(data)
         }
       navigate('/sizes')
  }

const handleDelete = ()=> {
    deleteItem(+params!)
    navigate('/sizes')
}

  return (
    <div className={styles.root} >
       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
