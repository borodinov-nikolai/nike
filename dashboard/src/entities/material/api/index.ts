import { emptySplitApi } from "../../../shared/configs/rtk_base";
import { Material } from "../interfaces";




type Dto = {
  name: string,
  value: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMaterials: build.query<Material[], void>({
      query: () => "/materials",
      providesTags: ['Material'],
    }),
    addMaterial: build.mutation<Material, {name: string, value: string}>({
      query: (data)=> ({
        url: '/materials',
        method: 'POST',
        body: {
          ...data
        }
      }),
      invalidatesTags: ['Material']
    }),
    getMaterial: build.query<Material, number>({
       query: (id)=>`materials/${id}`,
       providesTags: ['Material']
    }),
    updateMaterial: build.mutation<Material, {id: number, data: Dto}>({
      query: ({id, data})=> ({
        url: `/materials/${id}`,
        method: 'PUT',
        body: {
          ...data
        }
      }),
      invalidatesTags: ['Material']
    }),
    deleteMaterial: build.mutation<string, number>({
      query: (id)=> ({
        url: '/materials',
        method: 'DELETE',
        body: {
          id
        }
      }),
      invalidatesTags: ['Material']
    })
  }),
  
  overrideExisting: false,
});


export const{useGetAllMaterialsQuery, useGetMaterialQuery, useAddMaterialMutation, useUpdateMaterialMutation, useDeleteMaterialMutation} = extendedApi