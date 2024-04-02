import { emptySplitApi } from "@/src/shared/configs/rtk_base";
import { Color } from "../interfaces";




const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=> ({
        getAllColors: build.query<Color[], void>({
            query: ()=> ('/colors'),
            providesTags: ['Color']
        })
    }),
    overrideExisting: false
})


export const {useGetAllColorsQuery} = extendedApi