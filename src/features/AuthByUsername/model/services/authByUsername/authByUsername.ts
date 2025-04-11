import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import axios from "axios"
import { User, userActions } from "entities/User"
import { getAuthByUsername, getAuthByUsernamePassword } from "../../selectors/authByUsername"
import { USER_LOCALSTORAGE_KEY } from "shared/lib/const/localStorage"
import { ValidateAuthErrors } from "../../types/AuthByUsername"
import { validateAuth } from "../validationError/validationError"

export const authByUsername = createAsyncThunk<User, void, ThunkConfig<ValidateAuthErrors[]>>(
    'authByUsername/authByUsername',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { getState, rejectWithValue, dispatch } = thunkAPI
        
        const username = getAuthByUsername(getState())
        const password = getAuthByUsernamePassword(getState())

        const errors = validateAuth({ username, password })

        if (errors.length) {
            return rejectWithValue(errors)
        }
        
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password
            })
            
            if (!response.data) {
                throw new Error()
            }

            // Сохранаяем юзера в лоакл сторедж
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch(e) {
           rejectWithValue([ValidateAuthErrors.SERVER_ERROR]) 
        }
    },
  )
  