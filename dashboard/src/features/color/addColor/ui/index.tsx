import styles from "./AddColor.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddSizeMutation } from "../../../../entities/size";

interface Inputs {
  value: string;
}

export const AddColor = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      value: "",
    },
  });
  const [addCategory] = useAddSizeMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data: {
    value: string;
  }) => {
    const res = await addCategory(data);
    if ("data" in res) {
      reset();
      navigate("/sizes", { replace: true });
    }
  };

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


