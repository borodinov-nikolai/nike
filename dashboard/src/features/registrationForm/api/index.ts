import { emptySplitApi } from "../../../shared/configs/rtk_base";



interface User {
    id: number
    email:string
    password: string
    login: string
    phoneNumber: string
    accessToken: string
  }

type Inputs ={
    email: string,
    password: string,
    role: string
}

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build)=>({
        registration: build.mutation<User, Inputs>({
            query: ({email, password, role}) =>({
                url: '/auth/sign-up',
                method: 'POST',
                body: {
                    email,
                    password,
                    role
                }
            }),
            invalidatesTags: ["User"]
        })
    }),
    overrideExisting: false
})



export const{useRegistrationMutation} = extendedApi