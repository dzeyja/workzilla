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
            })
        }),
        getExecutorTasksResponsesByStatus: build.query<TaskResponse[], {userId: string, status?: TaskResponseStatus}>({
            query: ({userId, status}) => ({
                url: '/taskResponses',
                params: {
                    userId,
                    ...(status ? {status} : {})
                }
            })
        }),
    }),
})
 
export const useGetExecutorTaskResponses = getExecutorTaskResponsesApi.useGetExecutorTasksResponsesQuery
export const useGetExecutorTaskResponsesByStatus = getExecutorTaskResponsesApi.useGetExecutorTasksResponsesByStatusQuery