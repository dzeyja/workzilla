'use client'

import { Provider, useDispatch, useSelector } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode, useEffect, useMemo } from "react"
import { userActions } from "entities/User"

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
