import { UserRole } from "entities/User"

export interface SignUpSchema {
    id: string
    username: string
    password: string
    role: UserRole
    isLoading: boolean
}