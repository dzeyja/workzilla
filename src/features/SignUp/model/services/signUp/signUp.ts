import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import axios from "axios"
import { User, userActions } from "entities/User"
import { USER_LOCALSTORAGE_KEY } from "shared/lib/const/localStorage"
import { getSignUpPassword, getSignUpRole, getSignUpUsername } from "../../selectors/signUpSelectors"
import { validateSignUp } from "../validationError/validationError"
import { ValidateSignUpErrors } from "../../types/signUp"

export const signUp = createAsyncThunk<User, void, ThunkConfig<ValidateSignUpErrors[]>>(
    'signUp/signUp',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { getState, rejectWithValue, dispatch } = thunkAPI
        
        const username = getSignUpUsername(getState())
        const password = getSignUpPassword(getState())
        const role = getSignUpRole(getState())

        const validateError = validateSignUp({username, password})
        
        if (validateError.length) {
            return rejectWithValue(validateError)
        }

        try {
            const response = await axios.post<User>('http://localhost:8000/register', {
                username,
                password,
                role
            })
            
            if (!response.data) {
                throw new Error()
            }

            // Сохранаяем юзера в лоакл сторедж
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch(e) {
           rejectWithValue([ValidateSignUpErrors.SERVER_ERROR]) 
        }
    },
  )
  