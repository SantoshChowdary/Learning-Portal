import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userData : {},
    isUserLoggedIn : false
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        addUserToDB : (state, action) => {
            state.userData = action.payload
            state.isUserLoggedIn = true
        },
        updateUserLoggedStatus : (state, action) => {
            state.isUserLoggedIn = true
        }
    }
})

export const {addUserToDB, updateUserLoggedStatus} = userSlice.actions;
export default userSlice.reducer