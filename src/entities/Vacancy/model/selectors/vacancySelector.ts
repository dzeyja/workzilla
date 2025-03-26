import { StateSchema } from "app/Providers/StoreProvider";

export const getVacancyData = (state: StateSchema) => state.vacancy?.data
export const getVacancyIsLoading = (state: StateSchema) => state.vacancy?.isLoading
export const getVacancyError = (state: StateSchema) => state.vacancy?.error
export const getVacancyOrder = (state: StateSchema) => state.vacancy?.order
export const getVacancySearch = (state: StateSchema) => state.vacancy?.search