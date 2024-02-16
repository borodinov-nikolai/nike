import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useRouter } from 'next/navigation';







const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
>
  = async (args, api, extraOptions) => {
    let result = await fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_BACKEND_API,
      credentials: 'include',
      prepareHeaders: (headers) => {
        const token: string | null = localStorage.getItem('jwt');
        if (token) {
          headers.set("Authorization", "Bearer " + token);
        }
        return headers;
      }
    })(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
      // Попытка получить новый токен
      const refreshResult = await fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND_API,
        credentials: 'include',
        prepareHeaders: (headers) => {
          const token: string | null = localStorage.getItem('jwt');
          if (token) {
            headers.set("Authorization", "Bearer " + token);
          }
          return headers;
        }
      })('/auth/refresh', api, extraOptions);



      if (refreshResult.data) {
        // Сохранение нового токена

        localStorage.setItem('jwt', (refreshResult as { data: { freshAccessToken: string } }).data.freshAccessToken)
        // Повторная попытка выполнить исходный запрос
        result = await fetchBaseQuery({
          baseUrl: process.env.NEXT_PUBLIC_BACKEND_API,
          credentials: 'include',
          prepareHeaders: (headers) => {
            const token: string | null = localStorage.getItem('jwt');
            if (token) {
              headers.set("Authorization", "Bearer " + token);
            }
            return headers;
          }
        })(args, api, extraOptions);
      } else {
        // В случае неудачи при получении нового токена, произвести выход из системы
        localStorage.removeItem('jwt')
       
      }
    }

    return result;
  };







export const emptySplitApi = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: () => ({}),

})



