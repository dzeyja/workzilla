import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Vacancy } from "entities/Vacancy"
import { ValidateVacancyError } from "../../types/CreateVacancyFormSchema"
import { validateVacancy } from "../validateCreateVacancyErrors/validateCreateVacancyErrors"
import { getCreateVacancyFormData } from "../../selectors/createVacancySelectors"
import { getUserAuthData } from "entities/User"

export const createVacancy = createAsyncThunk<Vacancy, void, ThunkConfig<ValidateVacancyError[]>>(
    'vacancy/createVacancy',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { 
            getState, 
            rejectWithValue, 
            extra 
        } = thunkAPI
        
        const user = getUserAuthData(getState())
        const formData = getCreateVacancyFormData(getState())

        const errors = validateVacancy(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }
        
        try {
            const response = await extra.api.post<Vacancy>('/vacancies', {
                ...formData,
                userId: user?.id
            })
            
            if (!response.data) {
                throw new Error()
            }

            alert('Вы успешно создали вакансию')
            return response.data
        } catch(e) {
           rejectWithValue([ValidateVacancyError.SERVER_ERROR]) 
        }
    },
  )
  