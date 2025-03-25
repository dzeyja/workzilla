'use client'

import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode, useMemo } from "react"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"

interface StoreProviderProps {
    children: ReactNode
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({ children, asyncReducers }: StoreProviderProps) => {
    const store = useMemo(() => createReduxStore(asyncReducers as ReducersMapObject<StateSchema>), [])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
