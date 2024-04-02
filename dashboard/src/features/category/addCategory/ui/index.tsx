import styles from "./AddProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAddCategoryMutation } from "../../../../entities/category";
import { useGetCategoryQuery, useUpdateCategoryMutation } from "../../../../entities/category";
import { useEffect } from "react";

interface Inputs {
  name: string;
  value: string;
}

const AddCategory = () => {
  const {edit: param} = useParams()
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      name: "",
      value: "",
    },
  });
  const category = useGetCategoryQuery(Number(param), {skip: param ==='add' && true})
  const [addCategory] = useAddCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation()
  const onSubmit: SubmitHandler<Inputs> = async (data: {
    name: string;
    value: string;
  }) => {
   if(category.data){
   const res = await updateCategory({id: Number(param), data})
   if ("data" in res) {
    reset();
    navigate("/categories", { replace: true });
  }
   } else{
     const res = await addCategory(data);
    if ("data" in res) {
      reset();
      navigate("/categories", { replace: true });
    }
  }
  };

  useEffect(()=> {

    if(category.data) {
      const {name, value} = category.data
     setValue('name', name);
     setValue('value', value)
    }
  }, [category])

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
