import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { User, UserRole } from "../../types/UserSchema"
import { getUserAuthData } from "../../selectors/user"
import { USER_LOCALSTORAGE_KEY } from "shared/lib/const/localStorage"
import { userActions } from "../../slice/userSlice"

export const updateUserRole = createAsyncThunk<User, UserRole, ThunkConfig<string>>(
    'user/updateUserRole',
    //@ts-ignore
    async (role, thunkAPI) => {
        const { 
            extra, 
            rejectWithValue, 
            getState,
            dispatch,
        } = thunkAPI

        const user = getUserAuthData(getState())

        try {
            const response = await extra.api.patch<User>(`/users/${user?.id}`, {
                role
            })
            
            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            
            return response.data
        } catch(e) {
           rejectWithValue('Ошибка при изменени роли пользователя') 
        }
    },
  )
  