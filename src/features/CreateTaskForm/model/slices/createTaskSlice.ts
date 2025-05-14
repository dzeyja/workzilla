import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CreateTaskFormSchema, TaskValidationError } from '../types/createTaskFormSchema'
import { Task } from 'entities/Task'
import { createTask } from '../services/createTask/createTask'

const initialState: CreateTaskFormSchema = {
    formData: {},
    isLoading: false,
    error: undefined
}

const createTaskSlice = createSlice({
    name: 'creaeteTask',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Task>) => {
            state.formData = {
                ...state.formData,
                ...action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(createTask.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as TaskValidationError[]
            })
    }
})

export const { actions: createTaskActions} = createTaskSlice
export const { reducer: createTaskReducer } = createTaskSlice