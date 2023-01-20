import { createSlice } from '@reduxjs/toolkit';
import { LoginEmptyState } from '@/types';
import { saveInLocalStorage, clearLocalStorage } from '@/utilities';

export const authSlice = createSlice({
    name: 'auth',
    initialState: JSON.parse(localStorage.getItem('user')!) || LoginEmptyState,

    reducers: {

        login: (state, { payload }) => {
            const formatData = JSON.stringify(payload)
            saveInLocalStorage('user', formatData)
            return { ...payload }
        },

        logOut: () => {
            clearLocalStorage()
            return LoginEmptyState
        }
    }

});


export const { login, logOut } = authSlice.actions;