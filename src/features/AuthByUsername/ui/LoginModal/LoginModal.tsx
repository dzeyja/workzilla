"use client";

import React, { useCallback } from "react";
import { getAuthByUsername, getAuthByUsernamePassword } from "../../model/selectors/authByUsername";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { authByUsernameActions } from "../../model/slice/authByUsernameSlice";
import { authByUsername } from "../../model/services/authByUsername/authByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/Input/Input";

export const LoginModal = () => {
    const username = useSelector(getAuthByUsername)
    const password = useSelector(getAuthByUsernamePassword)
    const dispatch = useAppDispatch()

    const onUsernameChange = useCallback((value: string) => {
        dispatch(authByUsernameActions.setUsername(value))
    }, [dispatch])
    
    const onPasswordChange = useCallback((value: string) => {
        dispatch(authByUsernameActions.setPassword(value))
    }, [dispatch])

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(authByUsername())
        dispatch(authByUsernameActions.setUsername(''))
        dispatch(authByUsernameActions.setPassword(''))
        alert('Вы успешно авторизовались')
    }, [dispatch])

    return (
        <div className="flex gap-4 flex-col p-10 bg-white rounded-btn w-128 justify-center">
            <div className="text-xxl">Войти</div>
            <Input 
                placeholder="Имя пользователя"
                onChange={onUsernameChange}
                value={username}
            />
            <Input 
                placeholder="Пароль"
                onChange={onPasswordChange}
                value={password}
            />
            <Button onClick={onClick}>
                Войти
            </Button>
        </div>
    );
};