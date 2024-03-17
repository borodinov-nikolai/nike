import styles from "./AddProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../../entities/product/api";
import { useNavigate } from "react-router-dom";
import { useAddCategoryMutation } from "../../../../entities/category";

interface Inputs {
  name: string;
  value: string;
}

const AddCategory = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      value: "",
    },
  });
  const [addCategory] = useAddCategoryMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data: {
    name: string;
    value: string;
  }) => {
    const res = await addCategory(data);
    if ("data" in res) {
      reset();
      navigate("/categories", { replace: true });
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
        <div className={styles.formItem}>
          <label htmlFor="name">Название</label>
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

export default AddCategory;
