import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import axios from "axios"
import { User, userActions } from "entities/User"
import { getAuthByUsername, getAuthByUsernamePassword } from "../../selectors/authByUsername"

export const authByUsername = createAsyncThunk<User, void, ThunkConfig<string>>(
    'authByUsername/authByUsername',
    async (_, thunkAPI) => {
        const { getState, rejectWithValue, dispatch } = thunkAPI
        
        const username = getAuthByUsername(getState())
        const password = getAuthByUsernamePassword(getState())
        
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password
            })
            
            if (!response.data) {
                throw new Error()
            }

            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch(e) {
           rejectWithValue('error') 
        }
    },
  )
  