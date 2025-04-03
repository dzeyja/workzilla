import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { signUp } from "../signUp/signUp"
import { signUpActions } from "../../slice/signUpSlice"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const signUpClick = createAsyncThunk<void, AppRouterInstance, ThunkConfig<string>>(
    'signUp/signUpClick',
    //@ts-ignore
    async (router, thunkAPI) => {
        const { dispatch } = thunkAPI
        
        try {
            const result = await dispatch(signUp()).unwrap()
        
            if (result) {
                router.push('/profile')
            }
                        
            } catch(e) {
                console.log(e)
            } finally {
                dispatch(signUpActions.setUsername(''))
                dispatch(signUpActions.setPassword(''))
            }
    },
  )
  