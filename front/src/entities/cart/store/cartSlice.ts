import { PayloadAction, createSlice } from "@reduxjs/toolkit"





export interface ICartItem {
    id: number,   
    name: string,
    price: number,
    size: string | undefined,
    color: string | undefined ,
    count: number
    image: string
} 

interface IInitialState {
    items: ICartItem[]
    totalCount: number
}



const initialState: IInitialState = {
    items: [],
    totalCount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<ICartItem[]>)=> {
          state.items = action.payload
          state.totalCount = action.payload.reduce((sum, item)=> sum + item.count, 0)
        },
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const itemsArray = state.items
            const addedItem = action.payload
            const findedItem = state.items.find(({id})=>addedItem.id === id)
            if(!findedItem) {
                itemsArray.push(addedItem)
            } else {
                itemsArray.forEach((item)=> {
                    if(addedItem.id === item.id) {
                        item.count += addedItem.count
                    }
                })   
            }
            state.totalCount += addedItem.count
        }
    }
})

export const {addCartItem, setCartItems} = cartSlice.actions

export default cartSlice.reducer