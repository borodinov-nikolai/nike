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
    totalPrice: number
}



const initialState: IInitialState = {
    items: [],
    totalCount: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<ICartItem[]>)=> {
          state.items = action.payload
          state.totalCount = action.payload.reduce((sum, item)=> sum + item.count, 0)
          state.totalPrice = action.payload.reduce((sum, item)=> sum + (item.count * item.price), 0)
        },
        addCartItem: (state, action: PayloadAction<ICartItem>) => {
            const items = state.items
            const addedItem = action.payload
            const findedItem = state.items.find(({id})=>addedItem.id === id)
            if(!findedItem) {
                items.push(addedItem)
            } else {
                items.forEach((item)=> {
                    if(addedItem.id === item.id) {
                        item.count += addedItem.count
                    }
                })   
            }
            state.totalCount = items.reduce((sum, item)=> sum + item.count, 0)
            state.totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
        },
        setCartItemCount: (state, action: PayloadAction<{id: number, count: number}>) => {
                const items = state.items
                const {id, count} = action.payload
                items.forEach((item)=> {
                    if(item.id === id) {
                        item.count = count
                    }
                })
                state.totalCount = items.reduce((sum, item)=> sum + item.count, 0)
                state.totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
        },
        deleteCartItem: (state, action: PayloadAction<number>)=> {
             const payloadId = action.payload
             state.items = state.items.filter(({id})=> id !== payloadId)
             state.totalCount = state.items.reduce((sum, item)=> sum + item.count, 0)
             state.totalPrice = state.items.reduce((sum, item)=> sum + (item.count * item.price), 0)
        }
    }
})

export const {addCartItem, setCartItems, setCartItemCount, deleteCartItem} = cartSlice.actions

export default cartSlice.reducer