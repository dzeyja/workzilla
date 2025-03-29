import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { VacancySchema } from "entities/Vacancy";
import { AuthByUsernameSchema } from "features/AuthByUsername";
import { SelectTypesSchema } from "features/SelectTypes";
import { SignUpSchema } from "features/SignUp";

export interface StateSchema {
    user: UserSchema

    // Асинхронные редуссеры
    authByUsernameForm?: AuthByUsernameSchema
    profile?: ProfileSchema
    vacancy?: VacancySchema
    selectType?: SelectTypesSchema
    signUpForm?: SignUpSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    state: StateSchema
    rejectValue: T
    extra: ThunkExtraArg
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap:() => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema | undefined, action: AnyAction) => StateSchema
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}