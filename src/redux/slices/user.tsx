import { createSlice } from '@reduxjs/toolkit';
import { UserEmptyState } from '@/types';

export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState,

    reducers: {

        createUser: (state, { payload }) => {
            return { ...payload }
        },

        updateUser: (state, { payload }) => {
            return { ...state, ...payload }
        },

        resetUser: () => {
            return UserEmptyState
        }
    }

});


export const { createUser, updateUser, resetUser } = userSlice.actions;