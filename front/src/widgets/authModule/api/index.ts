import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id?: number
  identifier?:string
  password?: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<User, User>({
      query: ({identifier, password})=> ({
        url: '/users',
        method: 'POST',
        body: {
          email: identifier,
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

export const {useRegistrationMutation, useGetUserQuery} = extendedApi