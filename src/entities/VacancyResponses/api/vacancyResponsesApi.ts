import { rtkApi } from "shared/api/rtkApi"
import { VacancyResponse, VacancyResponseStatus } from "../model/types/vacancyResponses"

const vacancyResponsesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getVacancyResponses: build.query<VacancyResponse[], string>({
            query: (vacancyId) => ({
                url: '/responses',
                params: {
                    vacancyId: vacancyId, 
                    _expand: 'user',
                }
            }),
            providesTags: (result, error, vacancyId) =>
                result
                ? [
                    ...result.map(({ id }) => ({ type: 'Responses' as const, id })),
                    { type: 'Responses', id: vacancyId },
                    ]
                : [{ type: 'Responses', id: vacancyId }],
        }),

        getMyVacancyResponses: build.query<VacancyResponse[], { userId: string; status?: VacancyResponseStatus }>({
            query: ({userId, status}) => ({
                url: '/responses',
                params: {
                    userId: userId,
                    ...(status ? { status: status } : {}),
                }
            }),
            providesTags: (result, error, { userId }) => [
                { type: 'MyResponses', id: userId }
            ],
        }),
        
        sendVacancyResponse: build.mutation<void, VacancyResponse>({
            query: (response) => ({
                url: '/responses',
                method: 'POST',
                body: response,
            }),
            invalidatesTags: (result, error, { vacancyId, userId }) => [
                { type: 'Responses', id: vacancyId },
                { type: 'MyResponses', id: userId}
            ],
        }),
        
        updateVacancyResponseStatus: build.mutation<void, {id: string, status: VacancyResponseStatus}>({
            query: ({ id, status }) => ({
                url: `/responses/${id}`,
                method: 'PATCH',
                body: {status},
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Responses', id }]
        })
    }),
})

export const useGetVacancyResponses = vacancyResponsesApi.useGetVacancyResponsesQuery
export const useSendVacancyResponse = vacancyResponsesApi.useSendVacancyResponseMutation
export const useUpdateVacancyResposeStatus = vacancyResponsesApi.useUpdateVacancyResponseStatusMutation
export const useGetMyVacancyResponses = vacancyResponsesApi.useGetMyVacancyResponsesQuery
