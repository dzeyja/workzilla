import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Profile } from "../../types/ProfileSchema"
import { getProfileFormData } from "../../selectors/profile"
import { getUserAuthData } from "entities/User"

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfile',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const formData = getProfileFormData(getState())
        const user = getUserAuthData(getState())

        if(!user?.id) {
            return rejectWithValue('Пользователь не найден')
        }

        try {
            const response = await extra.api.put<Profile>(`/profile/${user?.id}`, formData)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('Ошибка обновления профиля') 
        }
    },
  )
  