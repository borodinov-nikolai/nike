import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './CategoryEditor.module.scss'
import { Button, Input, Popconfirm, PopconfirmProps } from 'antd'
import { useAddCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery, useUpdateCategoryMutation } from '../../../entities/category'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { DeleteButton } from '../../../features/deleteButton'
import { SubmitButton } from '../../../features/submitButton'



interface Inputs {
  name: string
  value: string
}

export const CategoryEditor = () => {
  const {edit: params} = useParams()
  const navigate = useNavigate()
  const [addCategory] = useAddCategoryMutation()
  const [updateCategory] = useUpdateCategoryMutation()
  const [deleteCategory] = useDeleteCategoryMutation()
  const {data: category} = useGetCategoryQuery(+params!, {skip: params === 'add'? true : false})
  const { handleSubmit, control, setValue} = useForm({
    defaultValues: {
      name: '',
      value: ''
    }
  })


  useEffect(()=> {
    if(category) {
      setValue('name', category.name)
      setValue('value', category.value)

    }
  }, [category])


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if(params !== 'add') {
      updateCategory({id: +params!, data})
    } else {

      addCategory(data)
    }
    
    navigate('/categories')
  }
  const handleDeleteCategory: PopconfirmProps['onConfirm'] = ()=> {
    deleteCategory(+params!)
    navigate('/categories')
  }

  return (
    <div className={styles.root} >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formItem} >
          <label htmlFor="name">Имя:</label>
          <Controller
          name='name'
          control={control}
          render={({field})=><Input {...field} id='name' />}
          />

        </div>
        <div className={styles.formItem} >
          <label htmlFor="value">Значение:</label>
          <Controller
          name='value'
          control={control}
          render={({field})=><Input {...field} id='value' />}
          />
        </div>
        <SubmitButton/>
      </form>
          {params !== 'add' && <DeleteButton onConfirm={handleDeleteCategory} />}
    </div>
  )
}
