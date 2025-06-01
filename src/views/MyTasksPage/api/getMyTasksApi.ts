import { Task } from "entities/Task";
import { UserRole } from "entities/User";
import { rtkApi } from "shared/api/rtkApi";

const getMyTasksByUserId = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMyTasks: build.query<Task[], {userId: string, role: UserRole}>({
            query: ({ userId, role }) => ({
                url: '/tasks',
                params: {
                    ...(role === 'customer' && { userId }),
                    ...(role === 'executor' && { assigneeId: userId }),
                    _expand: 'user',
                }
            })
        }),
    }),
})

export const useGetMyTasksByUserId = getMyTasksByUserId.useGetMyTasksQuery 
 