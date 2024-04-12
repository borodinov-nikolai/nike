import { Button, Image, Modal } from 'antd'
import styles from './ImagePicker.module.scss'
import { useGetAllImagesQuery } from '../../../entities/image'
import { FC, useState } from 'react'



interface Props {
    onChange: (value: Value[] | Value) => void
    multiple: boolean
}



type Value = {
    id: number
    name: string
}

export const ImagePicker: FC<Props> = ({ onChange, multiple }) => {
    const [value, setValue] = useState<Value>()
    const [multipleValue, setMultipleValue] = useState<Value[]>([])
    const { data } = useGetAllImagesQuery()
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const onImageChange = (image: Value) => {
        if (multiple) {
            multipleValue.some((item) => (item.id === image.id && item.name === image.name)) ? setMultipleValue((prev) => prev.filter((item: Value) => item.id !== image.id)) : setMultipleValue((prev) => [...prev, image])
        } else {
            setValue(image)
        }

    }

    const onConfirm = () => {

        if (multiple) {
            onChange(multipleValue)
        } else {
            value && onChange(value)
        }
        setIsOpen(false)
    }

    return (
        <>
            <Button className={styles.openBtn} type='primary' onClick={() => setIsOpen(true)}>Выбрать изображение</Button>
            <Modal onOk={onConfirm} onCancel={() => setIsOpen(false)} width={'80vw'} open={isOpen} >
                <div className={styles.content} >
                    {data?.map(({ id, name }) => {
                        return <div className={[styles.item, multiple && multipleValue.some((item) => item.id === id) || !multiple && value?.id === id ? styles.item__active : undefined].filter(Boolean).join(' ')} key={id} >
                            <Image preview={false} onClick={() => onImageChange({ id, name })} width={150} height={150} src={process.env.REACT_APP_BACKEND_UPLOADS + '/images/' + name} className={styles.image} />
                        </div>
                    })}
                </div>
            </Modal>
        </>
    )
}
