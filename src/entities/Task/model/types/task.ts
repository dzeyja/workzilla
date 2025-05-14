import { User } from "entities/User";
import { OrderType } from "shared/types";

export enum TaskStatus {
    All = 'all',
    Pending = 'pending',
    InProgress = 'in-progress',
    Completed = 'completed',
    Cancelled = 'cancelled',
    Accepted = 'accepted',
    Rejected = 'rejected'
}

export type TaskPriority = 'low' | 'medium' | 'high' | 'not_selected'

export interface Task {
    id?: string;
    title?: string;
    description?: string;
    status?: TaskStatus;
    createdAt?: string;
    deadline?: string;
    category?: TaskTypes;
    user?: User;
    priority?: TaskPriority;
    requirements?: string[]
    expectedResult?: string
    technicalDetails?: string[]
    techStack?: string[]
    estimatedTime?: string
    notes?: string
    email?: string
    assigneeId?: User
}

export interface TaskSchema {
    isLoading: boolean
    data: Task[]
    error?: string
    task?: Task
    myTasks?: Task[]
    search?: string
    types?: TaskTypes
    sort?: TaskSortField
    status?: TaskStatus
    priority?: TaskPriority
    order?: OrderType
}

export enum TaskTypes {
    ALL = 'Все',
    Development = "Разработка",
    Infrastructure = "Инфраструктура",
    Documentation = "Документация",
    Design = "Дизайн",
    Testing = "Тестирование",
    Analytics = "Аналитика",
    Feedback = "Обратная связь",
    ProjectManagement = "Управление проектом",
    Content = "Контент",
    Security = "Безопасность",
    Education = "Обучение",
    Support = "Поддержка"
}

export enum TaskSortField {
    Title = "title",
    CreatedAt = "createdAt",
    Deadline = "deadline",
    Priority = "priority",
    Status = "status",
    Category = "category"
}