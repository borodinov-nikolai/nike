import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface InitialState {
    pageSize: number
    currentPage: number
    totalPages: number
}

const initialState: InitialState  = {
    pageSize: 9,
    currentPage: 1,
    totalPages: 1
}


export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>)=> {
            state.currentPage = action.payload
        },
        setPageSize: (state, action: PayloadAction<number>)=> {
            state.pageSize = action.payload
        },
        setTotalPages: (state, action: PayloadAction<number>)=> {
            state.totalPages = action.payload
        },
    }
})


export const {setCurrentPage, setPageSize, setTotalPages} = paginationSlice.actions
export default paginationSlice.reducer