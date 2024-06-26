import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Image } from "../interfaces";




export const extenedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllImages: build.query<Image[], void>({
      query: () => '/images',
      providesTags: ['Image']
    }),
    uploadImage: build.mutation<Image, FormData>({
      query: (body) => ({
        url: '/upload',
        method: "POST",
        body

      }),
      invalidatesTags: ['Image']
    }),
    deleteImage: build.mutation<string, number>({
      query: (id)=>({
        url: `/images/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Image']
    })
  }),
  overrideExisting: true
}
)

export const { useUploadImageMutation, useGetAllImagesQuery, useDeleteImageMutation } = extenedApi