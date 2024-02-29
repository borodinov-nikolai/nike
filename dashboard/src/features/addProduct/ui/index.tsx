import React from 'react'
import styles from './AddProduct.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAddProductMutation } from '../../../entities/product/api'




interface Inputs {
    name: string,
    price: number
}

const AddProduct = () => {
  const {register, watch, handleSubmit, reset} = useForm({
    defaultValues: {
      name: '',
      price: 0
    }
  })
const [addProduct] = useAddProductMutation()

  const onSubmit: SubmitHandler<Inputs> = async({name, price})=> {
     const res = await addProduct({name, price:Number(price)})
     reset()
  }

  return (
    <div className={styles.root} >
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="name"></label>
          <input {...register('name')} id='name' type='text' />
        </div>
        <div>
          <label htmlFor="price"></label>
          <input {...register('price')} id='price' type='number' />
        </div>
        <button type='submit' >сохранить</button>
      </form>
    </div>
  )
}

export default AddProduct