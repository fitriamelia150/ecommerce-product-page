import { createSlice } from "@reduxjs/toolkit";

const sidebarSilce = createSlice({
    name: 'sidebar',
    initialState: false,
    reducers: {
        handleSidebar: (state) => {
            return !state
        }
    }
})

export const { handleSidebar } = sidebarSilce.actions
export default sidebarSilce.reducer