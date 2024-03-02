import React from "react";
import styles from "./AddProduct.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../entities/product/api";

interface Inputs {
  name: string;
  price: number;
  image: Object[];
}

const AddProduct = () => {
  const { register, watch, handleSubmit, reset } = useForm({
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
    reset();
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="name"></label>
          <input {...register("name")} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="price"></label>
          <input {...register("price")} id="price" type="number" />
        </div>
        <div>
          <label htmlFor="image"></label>
          <input {...register("image")} type="file" id="image" />
        </div>
        <button type="submit">сохранить</button>
      </form>
    </div>
  );
};

export default AddProduct;
