import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Vacancy, VacancySort, VacancyTypes } from "../../types/vacancy"
import { getVacancyOrder, getVacancySearch, getVacancySort, getVacancyType } from "../../selectors/vacancySelector"

export const fetchVacancies = createAsyncThunk<Vacancy[], number | undefined, ThunkConfig<string>>(
    'vacancy/fetchVacancy',
    //@ts-ignore
    async (limit, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const search = getVacancySearch(getState())
        const order = getVacancyOrder(getState())
        const category = getVacancyType(getState())
        const sort = getVacancySort(getState())

        try {
            const response = await extra.api.get(`/vacancies`, {
                params: {
                    _order: order,
                    category: category === VacancyTypes.ALL ? undefined : category,
                    _sort: sort,
                    ...(search && { title_like: search }),
                    ...(limit && {_limit: limit})
                }
            })
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           return rejectWithValue('error') 
        }
    },
  )
  