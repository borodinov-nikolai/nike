import { emptySplitApi } from "../../../shared/configs/rtk_base";

interface User {
  id: number;
  email: string;
  password: string;
  login: string;
  phoneNumber: string;
  accessToken: string;
}

interface Inputs {
  email: string;
  password: string;
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    authorization: build.mutation<User, Inputs>({
      query: ({ email, password }) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useAuthorizationMutation } = extendedApi;
