import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserRole, UserSchema } from '../types/UserSchema'
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/const/localStorage'

const initialState: UserSchema = {
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
        state.userData = action.payload
    },
    initAuhtData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)
      if (user) {
        state.userData = JSON.parse(user)
      }
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state.userData = undefined
    },
    setUserRole: (state, action: PayloadAction<UserRole>) => {
      if(state.userData) {
        state.userData.role = action.payload
      }
    }
  },
})

export const { actions: userActions} = userSlice
export const { reducer: userReducer } = userSlice