import styles from "./AddColor.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddSizeMutation } from "../../../../entities/size";
import { useAddColorMutation } from "../../../../entities/color/api";

interface Inputs {
  name: string
  value: string;
}

export const AddColor = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: '',
      value: "",
    },
  });
  const color = watch('value')
  const [addColor] = useAddColorMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const res = await addColor(data);
    if ("data" in res) {
      reset();
      navigate("/colors", { replace: true });
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
        <div className={styles.formItem}>
          <label htmlFor="name">Имя </label>
          <input {...register("name")} id="name" type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="value">Значение</label>
          <div className={styles.colorInput} >
            <input {...register("value")} id="value" type='color'/>
            <p className={styles.color} style={{background: color}} ></p>
          </div>
        </div>
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};


