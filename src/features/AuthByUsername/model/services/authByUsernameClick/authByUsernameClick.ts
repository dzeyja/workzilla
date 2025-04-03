import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { authByUsernameActions } from "../../slice/authByUsernameSlice"
import { authByUsername } from "../authByUsername/authByUsername"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const authByUsernameClick = createAsyncThunk<void, AppRouterInstance, ThunkConfig<string>>(
    'authByUsername/authByUsernameClick',
    //@ts-ignore
    async (router, thunkAPI) => {
        const { dispatch } = thunkAPI
        try {
            const result = await dispatch(authByUsername()).unwrap()
        
        if (result) {
            router.push('/')
        }
        
        } catch(e) {
            console.log(e)
        } finally {
            dispatch(authByUsernameActions.setUsername(''))
            dispatch(authByUsernameActions.setPassword(''))
        }
        
    },
  )
  