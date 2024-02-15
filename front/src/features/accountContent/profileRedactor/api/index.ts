import { emptySplitApi } from "@/src/shared/configs/rtk_base"




type Inputs = {
    email?: string,
    login?: string,
    phoneNumber?: string
}

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
      editProfile: build.mutation<any, Inputs>({
        query: (data) => ({
          url: '/account/edit',
          method: 'POST',
          body: {
           ...data
          }
        }),
        invalidatesTags: ['User']
  
      }),
    }),
    overrideExisting: false,
  })
  
  export const { useEditProfileMutation } = extendedApi