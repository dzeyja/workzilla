import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TakeTaskSchema } from '../types/takeTask'
import { takeTask } from '../services/takeTask/takeTask'

const initialState: TakeTaskSchema = {
    isLoadin: false,
    error: ''
}

const takeTaskSlice = createSlice({
    name: 'takeTask',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder 
            .addCase(takeTask.pending, (state) => {
                state.isLoadin = true
            })
            .addCase(takeTask.fulfilled, (state) => {
                state.isLoadin = false
            })
            //@ts-ignore
            .addCase(takeTask.rejected, (state, action: PayloadAction<string>) => {
                state.isLoadin = false
                state.error = action.payload
            })
        }
})

export const { reducer: takeTaskReducer } = takeTaskSlice