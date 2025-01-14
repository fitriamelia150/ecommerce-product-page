import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import navCartReducer from "./slices/navSlice";
import sidebarReducer from "./slices/sidebarSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        navCart: navCartReducer,
        sidebar: sidebarReducer,
    }
})

console.log("oncreate store : ", store.getState())

store.subscribe(() => {
    console.log("onchange store : ", store.getState())
})

export default store