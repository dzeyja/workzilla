import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { authByUsernameReducer } from "features/AuthByUsername";
import { $api } from "shared/api/api";
import { profileReducer } from "entities/Profile";

export function createReduxStore() {
    const rootState: ReducersMapObject<StateSchema> = {
        user: userReducer,
        authByUsernameForm: authByUsernameReducer,
        profile: profileReducer
    }

    const extraArg: ThunkExtraArg = {
        api: $api
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