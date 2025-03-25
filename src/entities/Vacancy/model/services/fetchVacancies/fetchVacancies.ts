import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Vacancy } from "../../types/vacancy"

export const fetchVacancies = createAsyncThunk<Vacancy[], void, ThunkConfig<string>>(
    'vacancy/fetchVacancy',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get(`/vacancies`)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('error') 
        }
    },
  )
  