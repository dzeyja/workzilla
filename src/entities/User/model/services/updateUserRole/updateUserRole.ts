import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { User, UserRole } from "../../types/UserSchema"
import { getUserAuthData } from "../../selectors/user"

export const updateUserRole = createAsyncThunk<User, UserRole, ThunkConfig<string>>(
    'user/updateUserRole',
    //@ts-ignore
    async (role, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const user = getUserAuthData(getState())

        try {
            const response = await extra.api.patch<User>(`/users/${user?.id}`, {
                role
            })
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('Ошибка при изменени роли пользователя') 
        }
    },
  )
  