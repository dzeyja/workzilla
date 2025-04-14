import { User } from "entities/User";

export type TaskStatus = 'pending' | 'in-progress' | 'completed'

export type TaskPriority = 'low' | 'medium' | 'high'

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
    deadline?: string;
    category?: string;
    user?: User;
    priority?: TaskPriority;
    requirements?: string[]
    expectedResult?: string
    technicalDetails?: string[]
    techStack?: string[]
    estimatedTime?: string
    notes?: string
    email?: string
}

export interface TaskSchema {
    isLoading: boolean
    data: Task[]
    error?: string
    task?: Task
    myTasks?: Task[]
}