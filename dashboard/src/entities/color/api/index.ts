import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Color } from "../interfaces";

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllColors: build.query<Color[], void>({
      query: () => "/colors",
      providesTags: ["Color"],
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


export const{useGetAllColorsQuery, useAddColorMutation, useDeleteColorMutation} = extendedApi
