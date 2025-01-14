import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {data:[]},
    reducers: {
        addItemQty(state, action) {
            const itemCart = state.data.find(item => item.title === action.payload.title)

            if(itemCart) {
                itemCart.qty++
            }else{
                state.data.push(action.payload)
            }

        },

        deleteItemQty(state, action) {
            const itemCart = state.data.find(item => item.title === action.payload.title)

            if(itemCart && itemCart.qty > 0) {
                itemCart.qty--
            }
        }
    }
})

export const { addItemQty, deleteItemQty } = cartSlice.actions
export default cartSlice.reducer