export interface Profile {
    id?: string
    first?: string;
    lastname?: string;
    age?: number,
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    isLoading: boolean
    error?: string
    data?: Profile
    form?: Profile
    readonly?: boolean
}