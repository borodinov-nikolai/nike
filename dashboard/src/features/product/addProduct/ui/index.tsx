import styles from "./AddProduct.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  useAddProductMutation,
  useGetOneProductQuery,
  useUpdateProductMutation,
} from "../../../../entities/product/api";
import { useNavigate, useParams } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../../../entities/category";
import { useEffect } from "react";
import Checkbox from "../../../../shared/ui/checkbox";
import { useGetAllSizesQuery } from "../../../../entities/size";
import { Color, useGetAllColorsQuery } from "../../../../entities/color";
import { Material } from "../../../../entities/material/interfaces";
import { useGetAllMaterialsQuery } from "../../../../entities/material";
import RadioButton from "../../../../shared/ui/radioButton";

interface Inputs {
  name: string;
  gender: string,
  price: number;
  categories: number[];
  sizes: number[];
  colors: Color[];
  image: Object[];
  materials: Material[];
}

const AddProduct = () => {
  const navigate = useNavigate();
  const { edit: params } = useParams();
  const { data: categoriesList } = useGetAllCategoriesQuery();
  const {data: sizesList} = useGetAllSizesQuery()
  const {data: colorsList} = useGetAllColorsQuery()
  const {data: materialsList} = useGetAllMaterialsQuery()
  const [addProduct] = useAddProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { data: product } = useGetOneProductQuery(Number(params), {
    skip: params === "add" && true,
  });
  const { register, handleSubmit, reset, setValue, control, watch } = useForm({
    defaultValues: {
      name: "",
      price: 0,
      gender: '',
      image: [],
      sizes: [],
      colors: [],
      categories: [],
      materials: []
    },
  });


  useEffect(() => {
    if (product) {
      const categories: number[] = product.categories?.map(({id})=> id);
      const sizes: number[] = product.sizes?.map(({id})=> id);
      const colors: number[] = product.colors?.map(({id})=> id)
      const materials: number[] = product.materials?.map(({id})=> id)
      setValue("name", product.name);
      setValue('gender', product.gender)
      setValue("price", product.price);
      setValue("categories", categories as never[]);
      setValue("sizes", sizes as never[]);
      setValue('colors', colors as never[])
      setValue('materials', materials as never[])
    }
  }, [product]);

  const onSubmit: SubmitHandler<Inputs> = async ({
    name,
    price,
    gender,
    image,
    sizes,
    colors,
    materials,
    categories,
  }) => {
    const formData = new FormData();
    formData.append("image", image[0] as Blob);
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("price", String(price));
    categories?.forEach((category, index) => {
      formData.append(`category_${index}`, String(category));
    });
    sizes?.forEach((size, index) => {
      formData.append(`size_${index}`, String(size));
    });
    colors?.forEach((color, index)=> {
      formData.append(`color_${index}`, String(color));
    })
    materials?.forEach((material, index)=> {
      formData.append(`material_${index}`, String(material));
    })
    if (params === "add") {
      const res = await addProduct(formData);
      if ("data" in res) {
        reset();
        navigate("/products", { replace: true });
      }
    } else {
      const res = await updateProduct({ id: Number(params), formData });
      if ("data" in res) {
        reset();
        navigate("/products", { replace: true });
      }
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
          <h2 className={styles.formItemTitle}>Пол:</h2>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return <div className={styles.gender} >
               <div><RadioButton checked={field.value === 'Мужские'} onChange={(e)=> field.onChange(e.target.value)} value="Мужские" name={'gender'} /> Мужские</div>  
               <div><RadioButton checked={field.value === 'Женские'} onChange={(e)=> field.onChange(e.target.value)} value="Женские" name={'gender'} /> Женские</div>  
              </div>
            }}
          />
        </div>
        {categoriesList && categoriesList.length> 0 && <div className={styles.formItem}>
          <h2 className={styles.formItemTitle}>Категории:</h2>
          <Controller
            name="categories"
            control={control}
            render={({ field }) => {
              return (
                <>
                  {categoriesList?.map(({ id, name, value }) => {
                    return (
                      <div key={id} className={styles.category}>
                        <label>
                          <Checkbox
                            onChange={(e) => {
                              const newValue = Number(e.target.value);
                              const array: number[] = [...field.value];
                              let newArray: number[];
                              if (array.includes(newValue)) {
                                newArray = array.filter(
                                  (item) => item !== newValue,
                                );
                              } else {
                                newArray = [...array, newValue];
                              }
                              field.onChange(newArray);
                            }}
                            value={id}
                            checked={(field.value as number[]).includes(id)}
                          />{" "}
                          {name}
                        </label>
                      </div>
                    );
                  })}
                </>
              );
            }}
          />
        </div>}
        {sizesList && sizesList.length > 0 && <div className={styles.formItem}>
          <h2 className={styles.formItemTitle}>Размеры:</h2>
          <Controller
            name="sizes"
            control={control}
            render={({ field }) => {
              return (
                <>
                  {sizesList?.map(({ id, value }) => {
                    return (
                      <div key={id} className={styles.category}>
                        <label>
                          <Checkbox
                            onChange={(e) => {
                              const newValue = Number(e.target.value);
                              const array: number[] = [...field.value];
                              let newArray: number[];
                              if (array.includes(newValue)) {
                                newArray = array.filter(
                                  (item) => item !== newValue,
                                );
                              } else {
                                newArray = [...array, newValue];
                              }
                              field.onChange(newArray);
                            }}
                            value={id}
                            checked={(field.value as number[]).includes(id)}
                          />{" "}
                          {value}
                        </label>
                      </div>
                    );
                  })}
                </>
              );
            }}
          />
           
        </div>}
        {colorsList && colorsList?.length  > 0 && <div className={styles.formItem} >
        <h2 className={styles.formItemTitle}>Цвета:</h2>
        <Controller
            name="colors"
            control={control}
            render={({ field }) => {
              return (
                <>
                  {colorsList?.map(({ id, name, value }) => {
                    return (
                      <div key={id} className={styles.category}>
                        <label>
                          <Checkbox
                            onChange={(e) => {
                              const newValue = Number(e.target.value);
                              const array: number[] = [...field.value];
                              let newArray: number[];
                              if (array.includes(newValue)) {
                                newArray = array.filter(
                                  (item) => item !== newValue,
                                );
                              } else {
                                newArray = [...array, newValue];
                              }
                              field.onChange(newArray);
                            }}
                            value={id}
                            checked={(field.value as number[]).includes(id)}
                          />{" "}
                          <p className={styles.color} style={{background: value}} ></p>
                        </label>
                      </div>
                    );
                  })}
                </>
              );
            }}
          />
        </div>}
        {materialsList && materialsList.length > 0 && <div className={styles.formItem} >
        <h2 className={styles.formItemTitle}>Материалы:</h2>
        <Controller
            name="materials"
            control={control}
            render={({ field }) => {
              return (
                <>
                  {materialsList?.map(({ id, name, value }) => {
                    return (
                      <div key={id} className={styles.category}>
                        <label>
                          <Checkbox
                            onChange={(e) => {
                              const newValue = Number(e.target.value);
                              const array: number[] = [...field.value];
                              let newArray: number[];
                              if (array.includes(newValue)) {
                                newArray = array.filter(
                                  (item) => item !== newValue,
                                );
                              } else {
                                newArray = [...array, newValue];
                              }
                              field.onChange(newArray);
                            }}
                            value={id}
                            checked={(field.value as number[]).includes(id)}
                          />{" "}
                          <p>{name}</p>
                        </label>
                      </div>
                    );
                  })}
                </>
              );
            }}
          />
        </div>}
        <button className={styles.saveBtn} type="submit">
          сохранить
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
