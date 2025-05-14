import { configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { createReducerManager } from "./reducerManager";
import { rtkApi } from "shared/api/rtkApi";
import { profileReducer } from "entities/Profile";

export function createReduxStore(asyncReducers?: ReducersMapObject<StateSchema>, initialState?: StateSchema) {
    const rootState: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        [rtkApi.reducerPath]: rtkApi.reducer,
        user: userReducer,
        profile: profileReducer
    }

    const reducerManager = createReducerManager(rootState)

    const extraArg: ThunkExtraArg = {
        api: $api
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']