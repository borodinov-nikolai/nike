import { emptySplitApi } from "../../../shared/configs/rtk_base";




export const extenedApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=>({
        uploadFile: build.mutation({
          query: (data)=> ({
            url: '/upload',
            method: "POST",
            data
          })
        })
    }),
    overrideExisting: true
}
)

export const {useUploadFileMutation} = extenedApi