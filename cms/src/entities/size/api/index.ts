import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Size, SizeDto } from "../interfaces";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSizes: build.query<Size[], void>({
      query: () => "/sizes",
      providesTags: ["Size"],
    }),
    addSize: build.mutation<Size, SizeDto>({
      query: (data) => ({
        url: "/sizes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Size"],
    }),
    getSize: build.query<Size, number>({
      query: (id)=>`sizes/${id}`,
      providesTags: ['Size']
   }),
   updateSize: build.mutation<Size, {id: number, data: {value: string}}>({
     query: ({id, data})=> ({
       url: `/sizes/${id}`,
       method: 'PUT',
       body: {
         ...data
       }
     }),
     invalidatesTags: ['Size']
   }),
    deleteSize: build.mutation<any, number>({
      query: (id) => ({
        url: "/sizes",
        method: "DELETE",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Size"],
    }),
  }),
  overrideExisting: false,
});

export const {
 useGetAllSizesQuery,
 useGetSizeQuery,
 useUpdateSizeMutation,
  useAddSizeMutation,
  useDeleteSizeMutation,
} = extendedApi;
