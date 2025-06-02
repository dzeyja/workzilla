import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Profile } from "../../types/ProfileSchema"
import { getUserAuthData } from "entities/User"

export const fetchProfile = createAsyncThunk<Profile, number, ThunkConfig<string>>(
    'profile/fetchProfile',
    //@ts-ignore
    async (paramsId, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const user = getUserAuthData(getState())

        if(!paramsId) {
            return rejectWithValue('Пользователь не найден')
        }

        try {
            const response = await extra.api.get(`/profile/${paramsId}`)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('Оштбка при получения профиля') 
        }
    },
  )
  