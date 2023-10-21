import {Slice, createSlice} from "@reduxjs/toolkit"

const initialState = {
    selectedDate : new Date().toLocaleDateString()
}

const scheduleSlice : Slice = createSlice({
    name : "schedule",
    initialState,
    reducers : {
        updateSelectedDate : (state, action) => {
            state.selectedDate = action.payload
        }
    }
})

export const {updateSelectedDate} = scheduleSlice.actions


export default scheduleSlice.reducer