import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id?: number
  email:string
  password: string
  login: string
  phone_number: string
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<User, User>({
      query: ({email, password, login, phone_number})=> ({
        url: '/auth/sign-up',
        method: 'POST',
        body: {
          email,
          password,
          login,
          phone_number
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