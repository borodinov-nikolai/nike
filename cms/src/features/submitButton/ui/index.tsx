import { Button } from "antd"
import styles from './SubmitButton.module.scss'



export const SubmitButton = () => {
  return (
    <Button htmlType='submit' type='primary' className={styles.submitBtn}>Сохранить</Button>
  )
}
