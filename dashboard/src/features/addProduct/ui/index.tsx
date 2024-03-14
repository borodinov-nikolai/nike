import React from "react";
import styles from "./AddProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../entities/product/api";
import { Navigate, useNavigate } from "react-router-dom";

interface Inputs {
  name: string;
  price: number;
  image: Object[];
}

const AddProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      price: 0,
      image: [],
    },
  });
  const [addProduct] = useAddProductMutation();

  const onSubmit: SubmitHandler<Inputs> = async ({ name, price, image }) => {
    const formData = new FormData();
    formData.append("image", image[0] as Blob);
    formData.append("name", name);
    formData.append("price", String(price));

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
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
