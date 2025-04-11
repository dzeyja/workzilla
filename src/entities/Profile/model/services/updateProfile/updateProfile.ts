import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Profile, ValidateProfileErrors } from "../../types/ProfileSchema"
import { getProfileFormData } from "../../selectors/profile"
import { getUserAuthData } from "entities/User"
import { validateProfile } from "../validateProfile/validateProfile"

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileErrors[]>>(
    'profile/updateProfile',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileFormData(getState())
        const user = getUserAuthData(getState())

        const errors = validateProfile(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${user?.id}`, formData)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue([ValidateProfileErrors.SERVER_ERROR]) 
        }
    },
  )
  