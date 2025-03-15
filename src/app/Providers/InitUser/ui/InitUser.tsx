"use client";

import { getUserAuthData, userActions } from "entities/User";
import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface InitUserProps {
    children: ReactNode
}

export const InitUser = (props: InitUserProps) => {
    const { children } = props;
    const dispatch = useDispatch()
    const user = useSelector(getUserAuthData)

    useEffect(() => {
        if(!user) {
            dispatch(userActions.initAuhtData())
        }
    }, [dispatch, user])
    
    return (
        <>
            {children}
        </>
    );
};