import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/ProfileSchema'
import { fetchProfile } from '../services/fetchProfile/fetchProfile'
import { updateProfile } from '../services/updateProfile/updateProfile'

const initialState: ProfileSchema = {
    isLoading: false,
    error: undefined,
    readonly: true,
    data: {},
    form: {}
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
        state.readonly = action.payload
    },
    cancelEdit: (state) => {
        state.form = state.data
        state.readonly = true
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
        state.form = {
            ...state.form,
            ...action.payload
        }
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchProfile.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.data = action.payload
            state.form = action.payload
        })
        .addCase(fetchProfile.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
        // update profile
        .addCase(updateProfile.pending, (state) => {
            state.error = undefined
            state.isLoading = true
        })
        .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.isLoading = false
            state.data = action.payload
            state.form = action.payload
            state.readonly = true
        })
        .addCase(updateProfile.rejected, (state, action) => {
            state.isLoading = false
        })
  }
})

export const { actions: profileActions} = profileSlice
export const { reducer: profileReducer } = profileSlice