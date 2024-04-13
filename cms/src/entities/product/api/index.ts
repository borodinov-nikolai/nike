import { FetchArgs } from "@reduxjs/toolkit/query";
import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { ICreateProductDto, IProduct } from "../interfaces";




const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<{products:IProduct[], totalCount: number}, string>({
      query: (params) => ({
        url: `/products?${params}`
      }),
      providesTags: ["Products"],
    }),
    getOneProduct: build.query<IProduct, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["Products", "Product"],
    }),
    addProduct: build.mutation<IProduct, ICreateProductDto>({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: build.mutation<IProduct, { id: number; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: build.mutation<any, number>({
      query: (id) => ({
        url: "/products",
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = extendedApi;
