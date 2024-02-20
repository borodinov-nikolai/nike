import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id: number
  email:string
  login: string
  phoneNumber: string
  [key:string]: any
}
const token = typeof window !== 'undefined' && localStorage.getItem('jwt')
const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser : build.query<User, void>({
      query: ()=> '/auth/me',
      providesTags:['User']
    })
  }),
  overrideExisting: false,
})

export const {useGetUserQuery} = token ? extendedApi : {useGetUserQuery:()=>{return {data:null, isLoading: false, isSuccess: false}}}