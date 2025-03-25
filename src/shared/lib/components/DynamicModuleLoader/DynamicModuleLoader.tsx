"use client";

import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "app/Providers/StoreProvider/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useStore } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

interface DynamicModuleLoaderProps {
    children: ReactNode
    name: StateSchemaKey
    reducer: Reducer
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const { 
        children,   
        name,
        reducer,
        removeAfterUnmount = true
    } = props
    
    const dispatch = useAppDispatch()
    const store = useStore() as ReduxStoreWithManager

    useEffect(() => {
        store.reducerManager.add(name, reducer)
        dispatch({type: `@INIT ${name} reducer`})

        return () => {
            if(removeAfterUnmount) {
                dispatch({type: `@DESTROY ${name} reducer`})
                store.reducerManager.remove(name)
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    );
};