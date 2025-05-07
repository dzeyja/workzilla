import { rtkApi } from "shared/api/rtkApi";
import { TaskResponse, TaskResponseStatus } from "../model/types/TaskResponses";

const taskResponsesApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getTaskResponses: build.query<TaskResponse[], string>({
            query: (taskId) => ({
                url: '/taskResponses',
                params: {
                    taskId: taskId, 
                    _expand: 'user',
                }
            }),
            providesTags: (result, error, taskId) =>
                result
                ? [
                    ...result.map(({ id }) => ({ type: 'TaskResponses' as const, id })),
                    { type: 'TaskResponses', id: 'LIST' },
                    ]
                : [{ type: 'TaskResponses', id: 'LIST' }],
        }),

        getMyTaskResponses: build.query<TaskResponse[], { userId: string; status?: TaskResponseStatus }>({
            query: ({userId, status}) => ({
                url: '/taskResponses',
                params: {
                    userId: userId,
                    ...(status ? { status } : {}), // Упрощенная запись
                    _expand: 'task', // Добавил расширение задачи
                }
            }),
            providesTags: (result, error, { userId }) =>
                result
                ? [
                    ...result.map(({ id }) => ({ type: 'MyTaskResponses' as const, id })),
                    { type: 'MyTaskResponses', id: userId },
                    ]
                : [{ type: 'MyTaskResponses', id: userId }],
        }),
        
        sendTaskResponse: build.mutation<TaskResponse, Omit<TaskResponse, 'id'>>({
            query: (response) => ({
                url: '/task-response',
                method: 'POST',
                body: response,
            }),
            invalidatesTags: (result, error, { taskId, userId }) => [
                { type: 'TaskResponses', id: 'LIST' },
                { type: 'MyTaskResponses', id: userId }
            ],
        }),
        
        updateTaskResponseStatus: build.mutation<TaskResponse, {id: string; status: TaskResponseStatus}>({
            query: ({ id, status }) => ({
                url: `/taskResponses/${id}`,
                method: 'PATCH',
                body: { status },
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'TaskResponses', id },
                { type: 'TaskResponses', id: 'LIST' },
                { type: 'MyTaskResponses', id: result?.userId }
            ]
        })
    }),
    overrideExisting: false,
});

export const useGetTaskResponses = taskResponsesApi.useGetTaskResponsesQuery;
export const useGetMyTaskResponses = taskResponsesApi.useGetMyTaskResponsesQuery;
export const useSendTaskResponse = taskResponsesApi.useSendTaskResponseMutation;
export const useUpdateTaskResponseStatus = taskResponsesApi.useUpdateTaskResponseStatusMutation;