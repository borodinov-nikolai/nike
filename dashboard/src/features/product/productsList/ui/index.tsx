import React from "react";
import styles from "./ProductsList.module.scss";
import { useGetAllProductsQuery } from "../../../../entities/product";
import { useDeleteProductMutation } from "../../../../entities/product/api";
import Button from "../../../../shared/ui/button";
import { Link, useNavigate } from "react-router-dom";
import qs from 'qs';



const ProductsList = () => {
  const navigate = useNavigate();
  const { data: products } = useGetAllProductsQuery(qs.stringify({orderBy:[{id:'asc'}]}));
  const [deleteProduct] = useDeleteProductMutation();
  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    e.stopPropagation();
    deleteProduct(id);
  };

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.listHeader}>
          <p>id</p> <p>изображение</p> <p>название</p> <p>цена</p>
          <p>Дата создания</p>
        </div>
        <ul className={styles.list}>
          {products?.map(({ id, name, price, image, createdAt }) => {
            return (
              <li
                onClick={() => navigate(`/products/${id}`)}
                key={id}
                className={styles.item}
              >
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
                    onClick={(e) => handleDelete(e, id)}
                  >
                    X
                  </button>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.addBtn}>
        <Link to={"/products/add"}>
          <Button>Добавить</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductsList;
