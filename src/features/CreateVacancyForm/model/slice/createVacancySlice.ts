import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {  } from 'entities/User'
import { CreateVacancyFormSchema, ValidateVacancyError } from '../types/CreateVacancyFormSchema'
import { Vacancy } from 'entities/Vacancy'
import { createVacancy } from '../services/createVacancy/createVacancy'

const initialState: CreateVacancyFormSchema = {
    formData: {},
    isLoading: false,
    error: undefined
}

const createVacancySlice = createSlice({
    name: 'creaeteVacancy',
    initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<Vacancy>) => {
            state.formData = {
                ...state.formData,
                ...action.payload
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createVacancy.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(createVacancy.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(createVacancy.rejected, (state, action) => {
                state.error = action.payload as ValidateVacancyError[]
                state.isLoading = false
            })
    },
})

export const { actions: createVacancyActions} = createVacancySlice
export const { reducer: createVacancyReducer } = createVacancySlice