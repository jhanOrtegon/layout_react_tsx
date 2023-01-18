import { configureStore } from "@reduxjs/toolkit";
import { AppStore } from "@/redux/models/";
import { userSlice, authSlice } from "./slices";

export const store = configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer,
        login: authSlice.reducer
    }
})