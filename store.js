import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Slices/todoSlices";

const store = configureStore({
    reducer:{
        tasks:todoSlice.reducer
    }
})
export default store