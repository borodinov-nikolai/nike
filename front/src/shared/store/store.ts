import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { emptySplitApi } from '../configs/rtk_base'

export const store = configureStore({
  reducer: {

    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
})

setupListeners(store.dispatch)