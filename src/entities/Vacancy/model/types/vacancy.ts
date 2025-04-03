import { OrderType } from "shared/types";

export type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship'
export type ExperienceLevel = 'junior' | 'middle' | 'senior'

export interface Vacancy {
    id: string 
    title: string
    description: string; 
    company: string; 
    location: string; 
    salary?: string; 
    employmentType: EmploymentType 
    postedAt: string; 
    skills: string[]; 
    experienceLevel: ExperienceLevel
    contactEmail: string;
    responsibilities: string[]
    requirements: string[]
    conditions: string[] 
    isActive: boolean; 
}

export interface VacancySchema {
    data?: Vacancy[]
    error?: string
    isLoading: boolean
    search?: string
    order?: OrderType
    vacancy?: Vacancy
}