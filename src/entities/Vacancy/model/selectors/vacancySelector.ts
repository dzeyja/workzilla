import { StateSchema } from "app/Providers/StoreProvider";

export const getVacancyData = (state: StateSchema) => state.vacancy?.data
export const getVacancyIsLoading = (state: StateSchema) => state.vacancy?.isLoading
export const getVacancyError = (state: StateSchema) => state.vacancy?.error
export const getVacancyOrder = (state: StateSchema) => state.vacancy?.order
export const getVacancySearch = (state: StateSchema) => state.vacancy?.search
export const getVacancyType = (state: StateSchema) => state.vacancy?.type
export const getVacancySort = (state: StateSchema) => state.vacancy?.sort
export const getVacancyEmploymentType = (state: StateSchema) => state.vacancy?.employmentType
export const getVacancyExperienceLevel = (state: StateSchema) => state.vacancy?.experienceLevel