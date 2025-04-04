import { StateSchema } from "app/Providers/StoreProvider";

export const getTaskData = (state: StateSchema) => state.task?.data
export const getTaskIsLoading = (state: StateSchema) => state.task?.isLoading
export const getTaskError = (state: StateSchema) => state.task?.error
export const getTask = (state: StateSchema) => state.task?.task
export const getTaskMyTasks = (state: StateSchema) => state.task?.myTasks