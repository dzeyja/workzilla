export type UserRole = 'executor' | 'customer' | 'null'

export interface User {
    id: string
    username: string
    role: UserRole
    avatar: string
}

export interface UserSchema {
    userData?: User
}