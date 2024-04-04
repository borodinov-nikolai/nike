import { PayloadAction, createSlice } from "@reduxjs/toolkit"






interface FiltersState {
    sizes: number[]
    sort: string
    price: number[]
    colors: string[]
    materials: string[]
}


const initialState: FiltersState = {
    sizes: [],
    sort: 'asc',
    price: [0, 10000],
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
        setSort: (state, action: PayloadAction<string>)=> {
            state.sort = action.payload
        },
        setPrice: (state, action: PayloadAction<number[]>)=> {
            state.price = action.payload
        },
        removePrice: (state)=> {
            state.price = [0, 10000]
        },
        resetFilters: (state) => {
            state.price = [0, 10000]
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


export const {setSizes, setSort, setPrice, resetFilters, setColors, setMaterials, removePrice} = filterSlice.actions
export default filterSlice.reducer