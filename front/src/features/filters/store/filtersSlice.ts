import { RootState } from "@/src/shared/store/store"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"






interface FiltersState {
    pageSize: number
    sizes: number[]
    sort: string
    price: {min: number, max: number}
    colors: string[]
    materials: string[]
}


const initialState: FiltersState = {
    sizes: [],
    pageSize: 9,
    sort: 'asc',
    price: {min: 2500, max: 7500},
    colors: [],
    materials: []
}



export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSizes: (state, action: PayloadAction<number>)=> {
            const newItem = action.payload
            const items = state.sizes
            if(items.includes(newItem)) {
                state.sizes = items.filter((color)=> color !== newItem)
            } else {
                items.push(newItem)
                state.sizes = items
            }
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
        removePrice: (state)=> {
            state.price = {min: 2500, max: 7500}
        },
        resetFilters: (state) => {
            state.pageSize = 9
            state.price = {min: 2500, max: 7500}
            state.sort = 'asc'
            state.sizes = []
            state.colors = []
            state.materials =[]
        },
        setColors: (state, action: PayloadAction<string>)=> {
            const newItem = action.payload
            const items = state.colors
            if(items.includes(newItem)) {
                state.colors = items.filter((color)=> color !== newItem)
            } else {
                items.push(newItem)
                state.colors = items
            }
        },
        setMaterials: (state, action: PayloadAction<string>)=> {
            const newItem = action.payload
            const items = state.materials
            if(items.includes(newItem)) {
                state.materials = items.filter((color)=> color !== newItem)
            } else {
                items.push(newItem)
                state.materials = items
            }
        },
     
    }
})


export const {setSizes, setPageSize, setSort, setPrice, resetFilters, setColors, setMaterials, removePrice} = filterSlice.actions
export default filterSlice.reducer