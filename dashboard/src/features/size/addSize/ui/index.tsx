import styles from "./AddSize.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAddSizeMutation } from "../../../../entities/size";
import { useEffect } from "react";
import { useGetSizeQuery, useUpdateSizeMutation } from "../../../../entities/size";

interface Inputs {
  value: string;
}

export const AddSize = () => {
  const {edit: param} = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      value: "",
    },
  });
  const [addSize] = useAddSizeMutation();
  const [updateSize] = useUpdateSizeMutation();
  const size = useGetSizeQuery(Number(param), {skip: param === 'add' && true})

  
  const onSubmit: SubmitHandler<Inputs> = async (data: {
    value: string;
  }) => {
    if(size.data) {
      const res = await updateSize({id: Number(param), data})
      if ("data" in res) {
        reset();
        navigate("/sizes", { replace: true });
      }
    } else {
      const res = await addSize(data);
      if ("data" in res) {
        reset();
        navigate("/sizes", { replace: true });
      }
    }
   
  };

  useEffect(()=>{
    if(size.data) {
        setValue('value', size.data.value)
    }
  },[size])

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
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


