import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VacancySchema } from '../types/vacancy'
import { fetchVacancies } from '../services/fetchVacancies/fetchVacancies'
import { OrderType } from 'shared/types'
import { fetchVacancyById } from '../services/fetchVacancyById/fetchVacancyById'

const initialState: VacancySchema = {
    data: [],
    error: undefined,
    isLoading: false,
    search: '',
    order: 'asc'
}

const vacancySlice = createSlice({
    name: 'vacancy',
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVacancies.pending, (state) => {
                state.isLoading = true
                state.data = undefined
                state.error = undefined
            })
            .addCase(fetchVacancies.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchVacancies.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            // fetchVacancyById
            .addCase(fetchVacancyById.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchVacancyById.fulfilled, (state, action) => {
                state.isLoading = false
                state.vacancy = action.payload
            }).addCase(fetchVacancyById.rejected, (state, action) => {
                state.isLoading = false
            })
    }
})

export const { actions: vacancyActions} = vacancySlice
export const { reducer: vacancyReducer } = vacancySlice