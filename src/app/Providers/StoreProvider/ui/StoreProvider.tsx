'use client'

import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode, useMemo } from "react"

interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
    const store = useMemo(() => createReduxStore(), [])

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
