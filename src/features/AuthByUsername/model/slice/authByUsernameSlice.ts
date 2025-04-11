import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthByUsernameSchema, ValidateAuthErrors } from '../types/AuthByUsername'
import { authByUsername } from '../services/authByUsername/authByUsername'

const initialState: AuthByUsernameSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: []
}

const authByUsernameSlice = createSlice({
  name: 'authByUsername',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder 
        .addCase(authByUsername.pending, (state) => {
            state.isLoading = true
            state.error = []
        })
        .addCase(authByUsername.fulfilled, (state) => {
            state.isLoading = false
        })
        .addCase(authByUsername.rejected, (state, action) => {
            state.error = action.payload as ValidateAuthErrors[]
        })
  }
})

export const { actions: authByUsernameActions} = authByUsernameSlice
export const { reducer: authByUsernameReducer } = authByUsernameSlice