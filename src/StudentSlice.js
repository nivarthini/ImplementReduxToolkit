import {createSlice} from '@reduxjs/toolkit'

const StudentSlice = createSlice({
        name: "student",
        initialState: {
            students: []
        },
        reducers: {
        addStudent: (state, action) =>{
            state.students.push(action.payload)
        }
    }
})

export const {addStudent} = StudentSlice.actions
export default StudentSlice.reducer