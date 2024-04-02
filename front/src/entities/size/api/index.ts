import { emptySplitApi } from "@/src/shared/configs/rtk_base";
import { Size } from "../interfaces";




const extendenApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=>({
        getAllSizes: build.query<Size[], void>({
            query: ()=> '/sizes',
            providesTags: ['Size']
        })
    }),
    overrideExisting: false
})


export const {useGetAllSizesQuery} = extendenApi