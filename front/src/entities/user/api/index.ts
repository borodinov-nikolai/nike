import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id: number
  email:string
  login: string
  phoneNumaber: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser : build.query<User, void>({
      query: ()=> '/auth/me',
      providesTags:['User']
    })
  }),
  overrideExisting: false,
})

export const {useGetUserQuery} = extendedApi