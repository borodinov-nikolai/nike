import styles from "./AddColor.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAddSizeMutation } from "../../../../entities/size";
import { useAddColorMutation, useGetColorQuery, useUpdateColorMutation } from "../../../../entities/color/api";
import { useEffect } from "react";

interface Inputs {
  name: string
  value: string;
}

export const AddColor = () => {
  const {edit: param} = useParams()
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      name: '',
      value: "",
    },
  });
  const colorValue = watch('value')
  const [addColor] = useAddColorMutation();
  const [updateColor] = useUpdateColorMutation()
  const color = useGetColorQuery(Number(param), {skip: param ==='add' && true})


  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if(color.data) {
 const res = await updateColor({id: Number(param), data})
      if ("data" in res) {
        reset();
        navigate("/colors", { replace: true });
      } else{const res = await addColor(data);
    if ("data" in res) {
      reset();
      navigate("/colors", { replace: true });
    }}}}
  

  useEffect(()=> {

  if(color.data) {
    const {name, value} = color.data
   setValue('name', name);
   setValue('value', value)
  }
}, [color])
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
            <p className={styles.color} style={{background: colorValue}} ></p>
          </div>
        </div>
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};


