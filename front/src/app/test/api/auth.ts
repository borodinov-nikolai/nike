import { emptySplitApi } from "@/shared/configs/rtk_base"



interface User {
  id?: number
  email:string
  password: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    postUser: build.mutation<User, User>({
      query: ({email, password})=> ({
        url: '/users',
        method: 'POST',
        body: {
            email,
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

export const {usePostUserMutation, useGetUserQuery} = extendedApi