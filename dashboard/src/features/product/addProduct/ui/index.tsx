import styles from "./AddProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../../entities/product/api";
import {useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../../../entities/category";

interface Inputs {
  name: string;
  price: number;
  categoryId: number;
  image: Object[];
}

const AddProduct = () => {
  const navigate = useNavigate();
  const {data: categories} = useGetAllCategoriesQuery()
  const { register, watch, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      price: 0,
      image: [],
      categoryId: 0
    },
  });
  const [addProduct] = useAddProductMutation();

  const onSubmit: SubmitHandler<Inputs> = async ({ name, price, image, categoryId }) => {
    const formData = new FormData();
    formData.append("image", image[0] as Blob);
    formData.append("name", name);
    formData.append("price", String(price));
    formData.append("categoryId", String(categoryId));

    const res = await addProduct(formData);
    if ("data" in res) {
      reset();
      navigate("/products", { replace: true });
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
          <label htmlFor="price">Цена</label>
          <input {...register("price")} id="price" type="number" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="image">Изображение</label>
          <input {...register("image")} type="file" id="image" />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="category">Категория</label>
           <select defaultValue={0} className={styles.categorySelect} {...register('categoryId')}  name="categoryId" id="categoryId">
          <option value={0} disabled hidden>Выберите категорию</option>
            {categories?.map(({id, name})=>{
              return <option key={id} value={id}>{name}</option>
            })}
           </select>
        </div>
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
