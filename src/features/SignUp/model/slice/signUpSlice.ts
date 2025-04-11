import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SignUpSchema, ValidateSignUpErrors } from '../types/signUp'
import { UserRole } from 'entities/User'
import { signUp } from '../services/signUp/signUp'

const initialState: SignUpSchema = {
    username: '',
    password: '',
    isLoading: false,
    role: 'executor',
    id: '',
    error: []
}

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload
    },
    setRole: (state, action: PayloadAction<UserRole>) => {
        state.role = action.payload    
    }
  },
  extraReducers: (builder) => {
    builder 
        .addCase(signUp.pending, (state) => {
            state.isLoading = true
            state.error = []
        })
        .addCase(signUp.fulfilled, (state) => {
            state.isLoading = false
        })
        .addCase(signUp.rejected, (state, action) => {
            state.error = action.payload as ValidateSignUpErrors[]
        })
    }
})

export const { actions: signUpActions} = signUpSlice
export const { reducer: signUpReducer } = signUpSlice