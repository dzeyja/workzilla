import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Vacancy } from "../../types/vacancy"
import { getVacancyOrder, getVacancySearch } from "../../selectors/vacancySelector"

export const fetchVacancies = createAsyncThunk<Vacancy[], void, ThunkConfig<string>>(
    'vacancy/fetchVacancy',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const search = getVacancySearch(getState())
        const order = getVacancyOrder(getState())

        try {
            const response = await extra.api.get(`/vacancies`, {
                params: {
                    _order: order,
                    _q: search,
                }
            })
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('error') 
        }
    },
  )
  