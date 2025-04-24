import { Vacancy } from "entities/Vacancy";
import { rtkApi } from "shared/api/rtkApi";

const getVacancyDetails = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getVacancyDetails: build.query<Vacancy, string>({
            query: (vacancyId) => ({
                url: `/vacancies/${vacancyId}`,
            })
        }),
    }),
})
 
export const useGetVacancyDetails = getVacancyDetails.useGetVacancyDetailsQuery