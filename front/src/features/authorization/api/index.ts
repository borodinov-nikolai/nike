import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id?: number
  identifier?:string
  password?: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    autorization: build.mutation<User, User>({
      query: ({identifier, password})=> ({
        url: '/auth/sign-in',
        method: 'POST',
        body: {
          identifier,
          password
        }
      }),
      invalidatesTags:['User']
     
    }),
    getUser : build.query<Array<User>, void>({
      query: ()=> '/users',
      providesTags:['User']
    })
  }),
  overrideExisting: false,
})

export const {useAutorizationMutation, useGetUserQuery} = extendedApi