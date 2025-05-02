import { StateSchema } from "app/Providers/StoreProvider";

export const getCreateVacancyFormData = (state: StateSchema) => state.createVacancy?.formData;
export const getCreateVacancyError = (state: StateSchema) => state.createVacancy?.error;