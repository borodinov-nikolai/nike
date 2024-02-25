import{ FC, ReactNode} from 'react'
import Img_arrow from '../../assets/icons/arrow.png'
import styles from './Button.module.scss'



interface Props {
    variant?: 'primary' | 'secondary',
    type?: 'button' | 'reset' | 'submit'
    children?: ReactNode,
    onSubmit?: ()=> void
    [key: string]: any
}

const Button: FC<Props> = ({ children, type='button', variant = 'primary', ...props }) => {


    
    return (
        <button type={type}   {...props} className={[styles.root, styles[variant]].filter(Boolean).join(' ')} >
                {children}
            </button>
    )

}
   
  



export default Button