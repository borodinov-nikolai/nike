import React from "react";
import styles from "./ProductsList.module.scss";
import { useGetAllProductsQuery } from "../../../entities/product";
import { useDeleteProductMutation } from "../../../entities/product/api";

const ProductsList = () => {
  const { data: products } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = (id: number) => {
    deleteProduct(id);
  };

  return (
    <div className={styles.root}>
      <div className={styles.listHeader}>
        <p>id</p> <p>изображение</p> <p>название</p> <p>цена</p>
        <p>Дата создания</p>
      </div>
      <ul className={styles.list}>
        {products?.map(({ id, name, price, image, createdAt }) => {
          return (
            <li key={id} className={styles.item}>
              <p>{id}</p>{" "}
              <p>
                <img
                  className={styles.image}
                  src={`http://localhost:5000/uploads/images/${image}`}
                />
              </p>{" "}
              <p> {name}</p>
              <p>{price}</p> <p>{createdAt}</p>
              <p>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(id)}
                >
                  X
                </button>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
