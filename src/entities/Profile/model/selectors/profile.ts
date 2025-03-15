import { StateSchema } from "app/Providers/StoreProvider";

export const getProfileData = (state: StateSchema) => state.profile.data
export const getProfileFormData = (state: StateSchema) => state.profile.form
export const getProfileReadonly = (state: StateSchema) => state.profile.readonly