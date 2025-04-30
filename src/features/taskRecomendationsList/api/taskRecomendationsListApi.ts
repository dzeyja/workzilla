import { Task } from "entities/Task";
import { rtkApi } from "shared/api/rtkApi";

const getTaskRecomendationsList = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getVacancyRecomendations: build.query<Task[], number>({
            query: (limit) => ({
                url: '/tasks',
                params: {
                    _limit: limit,
                }
            })
        }),
    }),
})
 
export const useGetTaskRecomendationsList = getTaskRecomendationsList.useGetVacancyRecomendationsQuery