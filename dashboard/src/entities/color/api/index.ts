import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Color, ColorDto } from "../interfaces";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllColors: build.query<Color[], void>({
      query: () => "/colors",
      providesTags: ["Color"],
    }),
    getColor: build.query<Color, number>({
      query: (id)=>`colors/${id}`,
      providesTags: ['Color']
   }),
   updateColor: build.mutation<Color, {id: number, data: ColorDto}>({
     query: ({id, data})=> ({
       url: `/colors/${id}`,
       method: 'PUT',
       body: {
         ...data
       }
     }),
     invalidatesTags: ['Color']
   }),
    addColor: build.mutation<Color, {name: string, value: string}>({
      query: (data)=> ({
        url: '/colors',
        method: 'POST',
        body: {
          ...data
        }
      }),
      invalidatesTags: ['Color']
    }),
    deleteColor: build.mutation<string, number>({
      query: (id)=> ({
        url: '/colors',
        method: 'DELETE',
        body: {
          id
        }
      }),
      invalidatesTags: ['Color']
    })
  }),
  
  overrideExisting: false,
});


export const{useGetAllColorsQuery,
  useGetColorQuery,
  useUpdateColorMutation,
   useAddColorMutation,
    useDeleteColorMutation} = extendedApi
