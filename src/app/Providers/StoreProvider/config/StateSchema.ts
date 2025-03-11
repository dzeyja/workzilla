import { UserSchema } from "entities/User";
import { AuthByUsernameSchema } from "features/AuthByUsername";

export interface StateSchema {
    user: UserSchema
    authByUsernameForm: AuthByUsernameSchema
}

export interface ThunkExtraArg {
    api?: string
}

export interface ThunkConfig<T> {
    state: StateSchema
    rejectValue: T
    extra: ThunkExtraArg
}