import { ExperienceLevel } from "entities/ExperienceLevel";
import { Specialties } from "entities/Specialty";
import { UserRole } from "entities/User";

export interface Profile {
    id?: string;
    userId?: string; 
    first?: string;
    lastname?: string;
    age?: number;
    city?: string;
    avatar?: string;
    specialty?: Specialties; 
    experience?: ExperienceLevel; 
    portfolio?: string[]; 
    bio?: string; 
    role?: UserRole
    email?: string
}

export interface ProfileSchema {
    isLoading: boolean
    error?: string
    data?: Profile
    form?: Profile
    readonly?: boolean
    validateProfileErrors: ValidateProfileErrors[]
}

export enum ValidateProfileErrors {
    NO_DATA = 'Данные не указаны',
    INCORRECT_USER_ID = 'Некорректный ID пользователя',
    INCORRECT_FIRST_NAME = 'Имя указано неверно',
    INCORRECT_LAST_NAME = 'Фамилия указана неверно',
    INCORRECT_AGE = 'Некорректный возраст',
    INCORRECT_CITY = 'Город указан неверно',
    INCORRECT_AVATAR = 'Некорректная ссылка на аватар',
    INCORRECT_SPECIALTY = 'Специальность не указана',
    INCORRECT_EXPERIENCE = 'Опыт не указан',
    INCORRECT_PORTFOLIO = 'Портфолио должно содержать корректные ссылки',
    INCORRECT_BIO = 'Биография слишком короткая или отсутствует',
    INCORRECT_ROLE = 'Роль указана неверно',
    INCORRECT_EMAIL = 'Некорректный email',
    SERVER_ERROR = 'Ошибка сервера при сохранении профиля',
}