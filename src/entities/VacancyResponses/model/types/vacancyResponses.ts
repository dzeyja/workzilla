import { User } from "entities/User";
import { Vacancy } from "entities/Vacancy";

export type VacancyResponseStatus = 'pending' | 'accepted' | 'rejected';

export interface VacancyResponse {
    id?: string;
    vacancyId: string;
    userId: string;
    status: VacancyResponseStatus;
    message: string
    cvlink: string
}