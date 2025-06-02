import { ExperienceLevel } from "entities/ExperienceLevel";
import { Specialties } from "entities/Specialty";

export type TaskResponseStatus = 'pending' | 'accepted' | 'rejected' | 'all';

export interface TaskResponse {
    id?: string;
    taskId?: string;
    userId?: string;
    task_title?: string
    status?: TaskResponseStatus;
    message?: string
    portfolio?: string
    proposed_price?: string; 
    estimated_time?: string; 
    portfolioLink?: string;
    specialty?: Specialties
    experience?: ExperienceLevel
}