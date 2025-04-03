import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Vacancy } from "../../types/vacancy"

export const fetchVacancyById = createAsyncThunk<Vacancy, string, ThunkConfig<string>>(
    'vacancy/fetchVacancyById',
    //@ts-ignore
    async (vacancyId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Vacancy>(`/vacancies/${vacancyId}`)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('Не удалось получить вакансию!') 
        }
    },
  )
  