import styles from "./AddMaterial.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAddMaterialMutation, useGetMaterialQuery, useUpdateMaterialMutation } from "../../../../entities/material";
import { useEffect } from "react";

interface Inputs {
  name: string;
  value: string;
}

export const AddMaterial = () => {
  const {edit: param} = useParams()
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      value: "",
    },
  });
  const material = useGetMaterialQuery(Number(param), {skip: param ==='add' && true})
  const [addMaterial] = useAddMaterialMutation();
  const [updateMaterial] = useUpdateMaterialMutation();

  
  const onSubmit: SubmitHandler<Inputs> = async (data: {
    name: string,
    value: string;
  }) => {
    if(material.data) {
      const res = await updateMaterial({id: Number(param), data})
      if ("data" in res) {
        reset();
        navigate("/materials", { replace: true });
      }
    } else {
      const res = await addMaterial(data);
      if ("data" in res) {
        reset();
        navigate("/materials", { replace: true });
      }
    }
 
  };


useEffect(()=> {

  if(material.data) {
    const {name, value} = material.data
   setValue('name', name);
   setValue('value', value)
  }
}, [material])

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
        <div className={styles.formItem}>
          <label htmlFor="name">Имя</label>
          <input {...register("name")} id="name" type="text" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="value">Значение</label>
          <input {...register("value")} id="value" type="text" />
        </div>
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};


