import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { authByUsernameReducer } from "features/AuthByUsername";

export function createReduxStore() {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        authByUsernameForm: authByUsernameReducer
    }

    const extraArg: ThunkExtraArg = {
        api: 'hello'
    }

    const store = configureStore({
        reducer: rootState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    })

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']