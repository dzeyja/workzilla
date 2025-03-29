import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SignUpSchema } from '../types/signUp'
import { UserRole } from 'entities/User'
import { signUp } from '../services/signUp/signUp'

const initialState: SignUpSchema = {
    username: '',
    password: '',
    isLoading: false,
    role: 'executor',
    id: ''
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
        })
        .addCase(signUp.fulfilled, (state) => {
            state.isLoading = false
        })
    }
})

export const { actions: signUpActions} = signUpSlice
export const { reducer: signUpReducer } = signUpSlice