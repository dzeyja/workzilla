"use client";

import { userActions } from "entities/User";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

interface InitUserProps {
    children: ReactNode
}

export const InitUser = (props: InitUserProps) => {
    const { children } = props;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuhtData())
    }, [dispatch])
    
    return (
        <>
            {children}
        </>
    );
};