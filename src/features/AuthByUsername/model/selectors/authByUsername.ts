import { StateSchema } from "app/Providers/StoreProvider";

export const getAuthByUsername = (state: StateSchema) => state.authByUsernameForm?.username
export const getAuthByUsernamePassword = (state: StateSchema) => state.authByUsernameForm?.password
export const getAuthByValidationErrors = (state: StateSchema) => state.authByUsernameForm?.error