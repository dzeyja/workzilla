import { StateSchema } from "app/Providers/StoreProvider";

export const getTaskData = (state: StateSchema) => state.task?.data
export const getTaskIsLoading = (state: StateSchema) => state.task?.isLoading
export const getTaskError = (state: StateSchema) => state.task?.error
export const getTask = (state: StateSchema) => state.task?.task
export const getTaskMyTasks = (state: StateSchema) => state.task?.myTasks
export const getTaskSearch = (state: StateSchema) => state.task?.search
export const getTaskTypes = (state: StateSchema) => state.task?.types
export const getTaskSort = (state: StateSchema) => state.task?.sort
export const getTaskStatus = (state: StateSchema) => state.task?.status
export const getTaskPriority = (state: StateSchema) => state.task?.priority
export const getTaskOrder = (state: StateSchema) => state.task?.order