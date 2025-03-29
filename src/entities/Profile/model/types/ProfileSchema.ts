import { UserRole } from "entities/User";

export interface Profile {
    id?: string;
    userId?: string; 
    first?: string;
    lastname?: string;
    age?: number;
    city?: string;
    avatar?: string;
    specialty?: string; 
    experience?: number; 
    portfolio?: string[]; 
    bio?: string; 
    role?: UserRole
}

export interface ProfileSchema {
    isLoading: boolean
    error?: string
    data?: Profile
    form?: Profile
    readonly?: boolean
}