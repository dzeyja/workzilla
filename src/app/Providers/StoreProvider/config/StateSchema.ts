import { AxiosInstance } from "axios";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { AuthByUsernameSchema } from "features/AuthByUsername";

export interface StateSchema {
    user: UserSchema
    authByUsernameForm: AuthByUsernameSchema
    profile: ProfileSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    state: StateSchema
    rejectValue: T
    extra: ThunkExtraArg
}