import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Profile } from "../../types/ProfileSchema"
import { getUserAuthData } from "entities/User"

export const fetchProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfile',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const user = getUserAuthData(getState())

        if(!user?.id) {
            return rejectWithValue('Пользователь не найден')
        }

        try {
            const response = await extra.api.get(`/profile/${user?.id}`)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('error') 
        }
    },
  )
  