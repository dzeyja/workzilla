import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
        state.userData = action.payload
    }
  },
})

export const { actions: userActions} = userSlice
export const { reducer: userReducer } = userSlice