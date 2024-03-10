import { RootState } from "@/src/shared/store/store"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"






interface FiltersState {
    pageSize: number
    sizes: number[]
    sort: string
    price: {min: number, max: number}
}


const initialState: FiltersState = {
    sizes: [],
    pageSize: 9,
    sort: 'price:desc',
    price: {min: 2500, max: 7500}
}



export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSizes: (state, action: PayloadAction<number[]>)=> {
            state.sizes = action.payload
        },
        setPageSize: (state, action: PayloadAction<number>)=> {
            state.pageSize = action.payload
        },
        setSort: (state, action: PayloadAction<string>)=> {
            state.sort = action.payload
        },
        setPrice: (state, action: PayloadAction<{min: number, max: number}>)=> {
            state.price = action.payload
        },
        resetFilters: (state) => {
            state.pageSize = 9
            state.price = {min: 2500, max: 7500}
            state.sort = 'price:desc'
            state.sizes = []
        }
     
    }
})


export const {setSizes, setPageSize, setSort, setPrice, resetFilters} = filterSlice.actions
export default filterSlice.reducer