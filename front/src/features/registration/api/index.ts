import { emptySplitApi } from "@/src/shared/configs/rtk_base"



interface User {
  id: number
  email:string
  password: string
  login: string
  phoneNumber: string
  accessToken: string
}


type Inputs = {

  email: string,
  login: string,
  phoneNumber: string,
  password: string,
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<User, Inputs>({
      query: ({email, password, login, phoneNumber})=> ({
        url: '/auth/sign-up',
        method: 'POST',
        body: {
          email,
          password,
          login,
          phoneNumber
        }
      }),
      invalidatesTags:['User']
     
    })
  }),
  overrideExisting: false,
})

export const {useRegistrationMutation} = extendedApi