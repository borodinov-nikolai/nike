import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './ColorEditor.module.scss'
import { ColorPicker, Input } from 'antd'
import { SubmitButton } from '../../../features/submitButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { DeleteButton } from '../../../features/deleteButton'
import { useAddColorMutation, useDeleteColorMutation, useGetColorQuery, useUpdateColorMutation } from '../../../entities/color'



interface Inputs {
    name: string
    value: string
}



export const ColorEditor = () => {
    const navigate = useNavigate()
    const { edit: params } = useParams()
    const [addItem] = useAddColorMutation()
    const [updateItem] = useUpdateColorMutation()
    const [deleteItem] = useDeleteColorMutation()
    const { data: item } = useGetColorQuery(+params!, { skip: params !== 'add' ? false : true })
    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            name: '',
            value: '',
        }
    })


    useEffect(() => {
        if (item) {
            setValue('name', item.name)
            setValue('value', item.value)
        }
    }, [item])

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (params !== 'add') {
            updateItem({ id: +params!, data })
        } else {
            addItem(data)
        }
        navigate('/colors')
    }

    const handleDelete = () => {
        deleteItem(+params!)
        navigate('/colors')
    }

    return (
        <div className={styles.root} >
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formItem} >
                    <label htmlFor="name">Имя:</label>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => <Input id='name' {...field} />}
                    />
                </div>
                <div className={styles.formItem} >
                    <label htmlFor="value">Значение:</label>
                    <Controller
                        name='value'
                        control={control}
                        render={({ field }) => <input type='color'  className={styles.color} {...field} />}
                    />
                </div>
                <SubmitButton />
            </form>
            {params !== 'add' && <DeleteButton onConfirm={handleDelete} />}
        </div>
    )
}
