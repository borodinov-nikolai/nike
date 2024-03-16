import styles from "./AddProduct.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useAddProductMutation, useGetOneProductQuery, useUpdateProductMutation } from "../../../../entities/product/api";
import {useNavigate, useParams} from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../../../entities/category";
import { useEffect } from "react";
import Button from "../../../../shared/ui/button";
import Checkbox from "../../../../shared/ui/checkbox";


interface Inputs {
  name: string;
  price: number;
  categoriesList: number[];
  image: Object[];
}

const AddProduct = () => {
  const navigate = useNavigate();
  const {edit: params} = useParams();
  const {data: categories} = useGetAllCategoriesQuery()
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const {data: product} = useGetOneProductQuery(Number(params), {skip: params === 'add' && true})
  const { register, watch, handleSubmit, reset, setValue, control } = useForm({
    defaultValues: {
      name: '',
      price: 0,
      image: [],
      categoriesList: []
    },
  });


  useEffect(()=> {
   
    if(product) {
      setValue('name', product.name)
      setValue('price', product.price)

    }

  }, [product])


  const onSubmit: SubmitHandler<Inputs> = async ({ name, price, image, categoriesList }) => {
    const formData = new FormData();
    formData.append("image", image[0] as Blob);
    formData.append("name", name);
    formData.append("price", String(price));
    formData.append("categoryId", String(categoriesList));
    if(params === 'add') {

      const res = await addProduct(formData);
      if ("data" in res) {
        reset();
        navigate("/products", { replace: true });
      }
    } else {
      const res = await updateProduct({id: Number(params), data: formData})
      if ("data" in res) {
        reset();
        navigate("/products", { replace: true });
      }
    }}


console.log(watch('categoriesList'))

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
        <h2 className={styles.formItemTitle} >Категории</h2>
        <Controller
        name='categoriesList'
        control={control}
        render={({field})=> {
         return  <>
           {categories?.map(({id, name, value})=> {
              return <div key={id} className={styles.category} ><label> 
                <input
              onChange={(e)=> {
                const newValue = Number(e.target.value)
                console.log(newValue)
                const array: number[] = [...field.value]
                let newArray: number[]
                 if( array.includes(newValue)){
                  newArray = array.filter((item)=> item !== newValue)
                 } else {
                  newArray = [...array, newValue]
                 }
                field.onChange(newArray)
              }}
              value={id} 
           
               type="checkbox" /> {name}</label></div>
            })}  
            </> 
        }}
        />
            

        </div>
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
