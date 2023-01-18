import { createSlice } from '@reduxjs/toolkit';
import { LoginEmptyState } from '@/types';

export const authSlice = createSlice({
    name: 'auth',
    initialState: LoginEmptyState,

    reducers: {

        login: (state, { payload }) => {
            return { ...payload }
        },

        logOut: () => {
            return LoginEmptyState
        }
    }

});


export const { login, logOut } = authSlice.actions;