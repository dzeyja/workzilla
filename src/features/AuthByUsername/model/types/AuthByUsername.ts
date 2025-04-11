export interface AuthByUsernameSchema {
    isLoading: boolean
    error: ValidateAuthErrors[]
    username: string
    password: string
}

export enum ValidateAuthErrors {
    NO_DATA = 'Данные не указаны',
    INCORRECT_USERNAME = 'Вы не указали имя пользователя',
    EMPTY_PASSWORD = 'Пароль не указан',
    SERVER_ERROR = 'Ошибка сервера',
    USER_NOT_FOUND = 'Пользователь не найден',
    WRONG_CREDENTIALS = 'Неверный логин или пароль',
}
