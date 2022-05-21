import { createSlice, nanoid } from '@reduxjs/toolkit'

export const jobSlice = createSlice({
    name: 'job',
    initialState: [],
    reducers: {
        addJob: (state, action) => {
            const jobList = {
                id: nanoid(),
                newJob: action.payload.jobText,
            }
            state.push(jobList);
        },
        deleteJob: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        clearAllJob: (state, action) => {
            
        }
    },
})

export const { addJob, deleteJob } = jobSlice.actions

export default jobSlice.reducer