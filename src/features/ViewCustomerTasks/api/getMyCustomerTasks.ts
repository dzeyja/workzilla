import { Task, TaskStatus } from "entities/Task";
import { rtkApi } from "shared/api/rtkApi";

const getMyCustomerTasksApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMyCustomerTasks: build.query<Task[], string>({
            query: (userId) => ({
                url: '/tasks',
                params: {
                    userId,
                }
            })
        }),
        getMyCustomerTasksByStatus: build.query<Task[], {userId: string, status?: TaskStatus}>({
            query: ({userId, status}) => ({
                url: '/tasks',
                params: {
                    userId,
                    ...(status ? {status} : {})
                }
            })
        }),
    }),
})
 
export const useGetMyCustomerTasks = getMyCustomerTasksApi.useGetMyCustomerTasksQuery
export const useGetMyCustomerTasksByStatus = getMyCustomerTasksApi.useGetMyCustomerTasksByStatusQuery