import { Task, TaskStatus } from "entities/Task";
import { TaskResponse, TaskResponseStatus } from "entities/TaskResponses";
import { rtkApi } from "shared/api/rtkApi";

const getExecutorTaskResponsesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getExecutorTasksResponses: build.query<TaskResponse[], string>({
            query: (userId) => ({
                url: '/taskResponses',
                params: {
                    userId,
                }
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'TaskResponses' as const, id })),
                        { type: 'TaskResponses', id: 'LIST' },
                    ]
                    : [{ type: 'TaskResponses', id: 'LIST' }],
        }),
        getExecutorTasksResponsesByStatus: build.query<TaskResponse[], {userId: string, status?: TaskResponseStatus}>({
            query: ({userId, status}) => ({
                url: '/taskResponses',
                params: {
                    userId,
                    ...(status ? {status} : {})
                }
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'TaskResponses' as const, id })),
                        { type: 'TaskResponses', id: 'LIST' },
                    ]
                    : [{ type: 'TaskResponses', id: 'LIST' }],
        }),
        createTaskResponse: build.mutation<TaskResponse, Partial<TaskResponse>>({
            query: (response) => ({
                url: '/taskResponses',
                method: 'POST',
                body: response,
            }),
            invalidatesTags: [{ type: 'TaskResponses', id: 'LIST' }],
        }),
    }),
})
 
export const useGetExecutorTaskResponses = getExecutorTaskResponsesApi.useGetExecutorTasksResponsesQuery
export const useGetExecutorTaskResponsesByStatus = getExecutorTaskResponsesApi.useGetExecutorTasksResponsesByStatusQuery
export const useCreateTaskResponse = getExecutorTaskResponsesApi.useCreateTaskResponseMutation