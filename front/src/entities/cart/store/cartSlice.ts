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
            const findedItem = state.items.find(({id, size, color})=>(addedItem.id === id && addedItem.size === size && addedItem.color === color))
            if(!findedItem) {
                items.push(addedItem)
            } else {
                items.forEach((item)=> {
                    if(addedItem.id === item.id && addedItem.size === item.size && addedItem.color === item.color) {
                        item.count += addedItem.count
                    }
                })   
            }
            state.totalCount = items.reduce((sum, item)=> sum + item.count, 0)
            state.totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
        },
        setCartItemCount: (state, action: PayloadAction<{id: number, size: string, color: string, count: number}>) => {
                const items = state.items
                const {id, count, size, color} = action.payload
                items.forEach((item)=> {
                    if(item.id === id && item.color === color && item.size === size ) {
                        item.count = count
                    }
                })
                state.totalCount = items.reduce((sum, item)=> sum + item.count, 0)
                state.totalPrice = items.reduce((sum, item)=> sum + (item.count * item.price), 0)
        },
        deleteCartItem: (state, action: PayloadAction<{id: number, color: string, size: string}>)=> {
             const payload = action.payload
             state.items = state.items.filter(({id, color, size})=> !(id === payload.id && color === payload.color && size === payload.size))
             state.totalCount = state.items.reduce((sum, item)=> sum + item.count, 0)
             state.totalPrice = state.items.reduce((sum, item)=> sum + (item.count * item.price), 0)
        }
    }
})

export const {addCartItem, setCartItems, setCartItemCount, deleteCartItem} = cartSlice.actions

export default cartSlice.reducer