import { StateSchema } from "app/Providers/StoreProvider";

export const getCreateTaskFormData = (state: StateSchema) => state.createTaskForm?.formData
export const getCreateTaskFormError = (state: StateSchema) => state.createTaskForm?.error
