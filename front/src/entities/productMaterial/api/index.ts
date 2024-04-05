import { emptySplitApi } from "@/src/shared/configs/rtk_base";
import { Material } from "../interfaces";



const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=> ({
         getAllMaterials: build.query<Material[], void>({
            query: ()=> '/materials',
            providesTags: ['Material']
         })
    }),
    overrideExisting: false
})


export const {useGetAllMaterialsQuery} = extendedApi