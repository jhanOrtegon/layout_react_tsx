import { configureStore } from "@reduxjs/toolkit";
import { AppStore } from "@/redux/models/";
import { userSlice } from "./slices";

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
})