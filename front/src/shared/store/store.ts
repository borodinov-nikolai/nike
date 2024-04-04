import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { emptySplitApi } from '../configs/rtk_base'
import {filterSlice} from '@/src/features/filters/index'
import {paginationSlice}  from '@/src/features/pagination'



export const store = configureStore({
  reducer: {
    filters: filterSlice,
    pagination: paginationSlice,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch