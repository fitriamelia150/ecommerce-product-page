import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import navCartReducer from "./slices/navSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        navCart: navCartReducer,
    }
})

console.log("oncreate store : ", store.getState())

store.subscribe(() => {
    console.log("onchange store : ", store.getState())
})

export default store