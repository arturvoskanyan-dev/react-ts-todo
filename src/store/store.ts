import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        todoState: todoSlice
    }
})

export default store;