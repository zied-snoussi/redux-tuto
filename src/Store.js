import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/features/user';
export const store = configureStore({
    reducer : {
        user: userReducer,
    },
})