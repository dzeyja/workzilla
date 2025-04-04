import { Task } from "entities/Task"

export interface CreateTaskSchema {
    isLoading: boolean
    data?: Task
    error?: string
}
