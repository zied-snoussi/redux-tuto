import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : "user",
    initialState : { value: { username: "", email: "", avatar: "" , gender: "" , role: ""} },
    reducers : {
        login : ( state, action ) => {
            state.value = action.payload
        },
        logout : ( state, action ) => {
            state.value =  { value: { username: "", email: "", avatar: "" , gender: "" , role: ""} }
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;