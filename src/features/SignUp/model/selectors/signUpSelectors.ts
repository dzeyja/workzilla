import { StateSchema } from "app/Providers/StoreProvider";

export const getSignUpUsername = (state: StateSchema) => state.signUpForm?.username
export const getSignUpPassword = (state: StateSchema) => state.signUpForm?.password
export const getSignUpRole = (state: StateSchema) => state.signUpForm?.role
export const getSignUpValidateError = (state: StateSchema) => state.signUpForm?.error