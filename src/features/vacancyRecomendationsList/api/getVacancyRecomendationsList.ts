import { Vacancy } from "entities/Vacancy";
import { rtkApi } from "shared/api/rtkApi";

const getVacancyRecomendationsList = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getVacancyRecomendations: build.query<Vacancy[], number>({
            query: (limit) => ({
                url: '/vacancies',
                params: {
                    _limit: limit,
                }
            })
        }),
    }),
})
 
export const useGetVacancyRecomendationsList = getVacancyRecomendationsList.useGetVacancyRecomendationsQuery