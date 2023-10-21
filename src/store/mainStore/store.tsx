import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice'
import scheduleSlice from '../slices/scheduleSlice'

const store = configureStore({
    reducer : {
        user : userSlice,
        schedule : scheduleSlice
    }
})

export default store