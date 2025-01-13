import { createSlice } from "@reduxjs/toolkit";

const navCart = createSlice({
    name: 'navCart',
    initialState: false,
    reducers: {
        handleNavCart: (state) => {
            return !state
        }
    }
})

export const { handleNavCart } = navCart.actions
export default navCart.reducer