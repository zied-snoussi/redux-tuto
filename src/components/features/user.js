import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : "user",
    initialState : { value: { email: "", nom: "", prenom: "" , adress: "" } },
    reducers : {
        login : ( state, action ) => {
            state.value = action.payload
        },
        logout : ( state, action ) => {
            state.value = { value: { email: "", nom: "", prenom: "" , adress: "" } }
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;