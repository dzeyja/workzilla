import { UserRole } from "entities/User"

export interface SignUpSchema {
    id: string
    username: string
    password: string
    role: UserRole
    error: ValidateSignUpErrors[]
    isLoading: boolean
}

export enum ValidateSignUpErrors {
    NO_DATA = 'Данные не указаны',
    EMPTY_PASSWORD = 'Пароль не указан',
    SHORT_PASSWORD = 'Пароль слишком короткий (мин. 6 символов)',
    NO_UPPERCASE = 'Пароль должен содержать хотя бы одну заглавную букву',
    NO_LOWERCASE = 'Пароль должен содержать хотя бы одну строчную букву',
    NO_NUMBER = 'Пароль должен содержать хотя бы одну цифру',
    NO_SPECIAL_CHAR = 'Пароль должен содержать хотя бы один спецсимвол (!@#$%^&*)',
    INCORRECT_USERNAME = 'Некорректный имя пользователя',
    SERVER_ERROR = 'Ошибка сервера',
    USER_NOT_FOUND = 'Пользователь не найден',
    WRONG_CREDENTIALS = 'Неверный логин или пароль',
}
