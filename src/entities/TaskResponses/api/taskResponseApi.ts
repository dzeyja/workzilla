import { rtkApi } from "shared/api/rtkApi";
import { TaskResponse, TaskResponseStatus } from "../model/types/TaskResponses";
import { TaskStatus } from "entities/Task";

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
                    ...(status ? { status } : {}),
                    _expand: 'task',
                }
            }),
            providesTags: (result, error, { userId }) =>
                result
                ? [
                    ...result.map(({ id }) => ({ type: 'MyTaskResponses' as const, id })),
                    { type: 'MyTaskResponses', id: userId },
                    { type: 'MyTaskResponses', id: 'LIST' }
                    ]
                : [{ type: 'MyTaskResponses', id: userId }, { type: 'MyTaskResponses', id: 'LIST' }],
        }),
        
        sendTaskResponse: build.mutation<TaskResponse, Omit<TaskResponse, 'id'>>({
            query: (response) => ({
                url: '/taskResponses',
                method: 'POST',
                body: response,
            }),
            invalidatesTags: (result, error, { taskId, userId }) => [
                { type: 'TaskResponses', id: 'LIST' },
                { type: 'MyTaskResponses', id: 'LIST' },
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
                { type: 'MyTaskResponses', id: 'LIST' },
                { type: 'MyTaskResponses', id: result?.userId }
            ]
        }),

        acceptTaskResponse: build.mutation<TaskResponse, {responseId: string; taskId: string}>({
            query: ({ responseId, taskId }) => ({
                url: `/taskResponses/${responseId}/accept`,
                method: 'POST',
                body: { taskId },
            }),
            invalidatesTags: (result, error, { responseId, taskId }) => [
                { type: 'TaskResponses', id: responseId },
                { type: 'TaskResponses', id: 'LIST' },
                { type: 'MyTaskResponses', id: 'LIST' },
                { type: 'Tasks', id: taskId }
            ]
        }),

        rejectTaskResponse: build.mutation<TaskResponse, {responseId: string}>({
            query: ({ responseId }) => ({
                url: `/taskResponses/${responseId}/reject`,
                method: 'POST'
            }),
            invalidatesTags: (result, error, { responseId }) => [
                { type: 'TaskResponses', id: responseId },
                { type: 'TaskResponses', id: 'LIST' },
                { type: 'MyTaskResponses', id: 'LIST' }
            ]
        }),

        completeTask: build.mutation<TaskResponse, {taskId: string}>({
            query: ({ taskId }) => ({
                url: `/tasks/${taskId}/complete`,
                method: 'POST'
            }),
            invalidatesTags: (result, error, { taskId }) => [
                { type: 'Tasks', id: taskId },
                { type: 'Tasks', id: 'LIST' },
                { type: 'TaskResponses', id: 'LIST' }
            ]
        }),

        cancelTask: build.mutation<TaskResponse, {taskId: string}>({
            query: ({ taskId }) => ({
                url: `/tasks/${taskId}/cancel`,
                method: 'POST'
            }),
            invalidatesTags: (result, error, { taskId }) => [
                { type: 'Tasks', id: taskId },
                { type: 'Tasks', id: 'LIST' },
                { type: 'TaskResponses', id: 'LIST' }
            ]
        })
    }),
    overrideExisting: false,
});

export const useGetTaskResponses = taskResponsesApi.useGetTaskResponsesQuery;
export const useGetMyTaskResponses = taskResponsesApi.useGetMyTaskResponsesQuery;
export const useSendTaskResponse = taskResponsesApi.useSendTaskResponseMutation;
export const useUpdateTaskResponseStatus = taskResponsesApi.useUpdateTaskResponseStatusMutation;
export const useAcceptTaskResponse = taskResponsesApi.useAcceptTaskResponseMutation;
export const useRejectTaskResponse = taskResponsesApi.useRejectTaskResponseMutation;
export const useCompleteTask = taskResponsesApi.useCompleteTaskMutation;
export const useCancelTask = taskResponsesApi.useCancelTaskMutation;