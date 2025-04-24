import { Vacancy } from "entities/Vacancy";
import { rtkApi } from "shared/api/rtkApi";

const getMyVacanciesList = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMyVacancies: build.query<Vacancy[], string>({
            query: (userId) => ({
                url: `/my-vacancies/${userId}`,
            })
        }),
    }),
})

export const useGetMyVacanciesList = getMyVacanciesList.useGetMyVacanciesQuery