import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Product } from "../interfaces";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query<{products:Product[], totalCount: number}, any>({
      query: (params) => ({
        url: '/products',
        params
      }),
      providesTags: ["Products"],
    }),
    getOneProduct: build.query<Product, number>({
      query: (id) => `/products/${id}`,
      providesTags: ["Products", "Product"],
    }),
    addProduct: build.mutation<Product, FormData>({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: build.mutation<Product, { id: number; formData: FormData }>({
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
