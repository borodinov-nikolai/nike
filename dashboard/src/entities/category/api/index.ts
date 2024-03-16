import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Category, Inputs } from "../interfaces";




const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
    addCategory: build.mutation<Category, Inputs>({
      query: (data) => ({
        url: "/categories",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation<any, number>({
      query: (id) => ({
        url: "/categories",
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Category"],
    }),
  }),
  overrideExisting: false,
});

export const {
useGetAllCategoriesQuery,
useAddCategoryMutation,
useDeleteCategoryMutation
} = extendedApi;
