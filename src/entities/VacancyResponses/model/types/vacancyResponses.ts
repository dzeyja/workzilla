import { ExperienceLevel } from "entities/ExperienceLevel";
import { Specialties } from "entities/Specialty";

export type VacancyResponseStatus = 'pending' | 'accepted' | 'rejected' | 'all';

export interface VacancyResponse {
    id?: string;
    vacancyId: string;
    userid: string;
    username?: string;
    vacancyTitle?: string
    status: VacancyResponseStatus;
    message: string
    cvlink: string
    specialty: Specialties
    experience: ExperienceLevel
    createdAt: string
    salary: string
    answer?: string
}