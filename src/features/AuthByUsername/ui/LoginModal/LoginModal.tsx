"use client";

import React, { useCallback } from "react";
import { getAuthByUsername, getAuthByUsernamePassword } from "../../model/selectors/authByUsername";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { authByUsernameActions } from "../../model/slice/authByUsernameSlice";
import { authByUsername } from "../../model/services/authByUsername/authByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export const LoginModal = () => {
    const username = useSelector(getAuthByUsername)
    const password = useSelector(getAuthByUsernamePassword)
    const dispatch = useAppDispatch()

    const onUsernameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authByUsernameActions.setUsername(e.target.value))
    }, [dispatch])
    
    const onPasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(authByUsernameActions.setPassword(e.target.value))
    }, [dispatch])

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(authByUsername())
        dispatch(authByUsernameActions.setUsername(''))
        dispatch(authByUsernameActions.setPassword(''))
    }, [dispatch])

    return (
        <div className="flex gap-4 flex-col p-10 bg-white rounded-btn w-128 justify-center">
            <div className="text-xxl">Войти</div>
            <input 
                placeholder="Имя пользователя" 
                className="p-4 w-full bg-white rounded-xl border" 
                onChange={onUsernameChange}
                value={username}
            />
            <input 
                placeholder="Пароль" 
                className="p-4 w-full bg-white rounded-xl border" 
                onChange={onPasswordChange}
                value={password}
            />
            <Button onClick={onClick}>
                Войти
            </Button>
        </div>
    );
};