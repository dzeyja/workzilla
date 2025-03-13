export type UserRole = 'executor' | 'customer'

export interface User {
    id: string
    username: string
    role: UserRole
}

export interface UserSchema {
    userData?: User
}