import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Category, CategoryDto} from "../interfaces";


const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCategories: build.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
    getCategory: build.query<Category, number>({
      query: (id)=>`categories/${id}`,
      providesTags: ['Category']
   }),
   updateCategory: build.mutation<Category, {id: number, data: CategoryDto}>({
     query: ({id, data})=> ({
       url: `/categories/${id}`,
       method: 'PUT',
       body: {
         ...data
       }
     }),
     invalidatesTags: ['Category']
   }),
    addCategory: build.mutation<Category, CategoryDto>({
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
  useGetCategoryQuery,
  useUpdateCategoryMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
} = extendedApi;
