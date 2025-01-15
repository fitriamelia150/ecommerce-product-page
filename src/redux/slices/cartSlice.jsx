import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {data:[], totalQty:0},
    reducers: {

        addToCart(state, action) {
            const itemCart = state.data.find(item => item.title === action.payload.title)

            if(!itemCart && action.payload.qty > 0) {
               state.data.push(action.payload)
            }

        },

        deleteFromCart(state, action) {
            state.data = state.data.filter(item => item.title !== action.payload.title)
        },

        addItemQty(state, action) {
            const itemCart = state.data.find(item => item.title === action.payload.title)

            if(itemCart) {
                itemCart.qty++
            }

        },

        deleteItemQty(state, action) {
            const itemCart = state.data.find(item => item.title === action.payload.title)

            if(itemCart && itemCart.qty > 0) {

                itemCart.qty--

                if(itemCart.qty === 0){
                    state.data = state.data.filter(item => item.title !== action.payload.title)
                }
            }

        },

        countTotalQty(state) {
            state.totalQty = state.data.reduce((acc, item) => acc + item.qty, 0)
        }
    }
})

export const { addToCart, deleteFromCart, addItemQty, deleteItemQty, countTotalQty } = cartSlice.actions
export default cartSlice.reducer