"use client";

import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "app/Providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { 
        children,   
        removeAfterUnmount = true,
        reducers
    } = props
    
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager
    
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey)
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};