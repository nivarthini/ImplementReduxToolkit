import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from './StudentSlice'

const store = configureStore({
    reducer: {
        student: StudentSlice
    }
})

export default store