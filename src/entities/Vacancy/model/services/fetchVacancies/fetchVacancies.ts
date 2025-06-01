import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Vacancy, VacancySort, VacancyTypes } from "../../types/vacancy"
import { getVacancyEmploymentType, getVacancyExperienceLevel, getVacancyOrder, getVacancySearch, getVacancySort, getVacancyType } from "../../selectors/vacancySelector"
import { ExperienceLevel } from "entities/ExperienceLevel"

export const fetchVacancies = createAsyncThunk<Vacancy[], number | undefined, ThunkConfig<string>>(
    'vacancy/fetchVacancy',
    //@ts-ignore
    async (limit, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const search = getVacancySearch(getState())
        const order = getVacancyOrder(getState())
        const category = getVacancyType(getState())
        const sort = getVacancySort(getState())
        const employmentType = getVacancyEmploymentType(getState())
        const experienceLevel = getVacancyExperienceLevel(getState())

        try {
            const response = await extra.api.get(`/vacancies`, {
                params: {
                    _order: order,
                    category: category === VacancyTypes.ALL ? undefined : category,
                    _sort: sort,
                    employmentType: employmentType === 'not_selected' ? undefined : employmentType,
                    experienceLevel: experienceLevel === ExperienceLevel.NULL ? undefined : experienceLevel,
                    ...(search && { title_like: search }),
                    ...(limit && {_limit: limit}),
                }
            })
            
            if (!response.data) {
                throw new Error()
            }

            console.log(response.data)

            return response.data
        } catch(e) {
           return rejectWithValue('error') 
        }
    },
  )
  