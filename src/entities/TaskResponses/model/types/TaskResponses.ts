import { ExperienceLevel } from "entities/ExperienceLevel";
import { Specialties } from "entities/Specialty";

export type TaskResponseStatus = 'pending' | 'accepted' | 'rejected' | 'all';

export interface TaskResponse {
    id?: string;
    taskId?: string;
    userId?: string;
    taskTitle?: string
    status?: TaskResponseStatus;
    message?: string
    portfolio?: string
    proposedPrice?: string; 
    estimatedTime?: string; 
    portfolioLink?: string;
    specialty?: Specialties
    experience?: ExperienceLevel
}