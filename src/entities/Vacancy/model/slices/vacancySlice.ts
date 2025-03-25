import { createSlice } from '@reduxjs/toolkit'
import { VacancySchema } from '../types/vacancy'
import { fetchVacancies } from '../services/fetchVacancies/fetchVacancies'

const initialState: VacancySchema = {
    data: [],
    error: undefined,
    isLoading: false
}

const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchVacancies.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: vacancyActions} = vacancySlice
export const { reducer: vacancyReducer } = vacancySlice