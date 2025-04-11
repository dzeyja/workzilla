"use client";

import React, { useCallback } from "react";
import { getAuthByUsername, getAuthByUsernamePassword, getAuthByValidationErrors } from "../../model/selectors/authByUsername";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { authByUsernameActions, authByUsernameReducer } from "../../model/slice/authByUsernameSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/Input/Input";
import { useRouter } from "next/navigation";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import Link from "next/link";
import { authByUsernameClick } from "../../model/services/authByUsernameClick/authByUsernameClick";
import { Text, TextTheme } from "shared/ui/Text/Text";

export const AuthByUsernameForm = () => {
    const username = useSelector(getAuthByUsername)
    const password = useSelector(getAuthByUsernamePassword)
    const validErrors = useSelector(getAuthByValidationErrors)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const onUsernameChange = useCallback((value: string) => {
        dispatch(authByUsernameActions.setUsername(value))
    }, [dispatch])
    
    const onPasswordChange = useCallback((value: string) => {
        dispatch(authByUsernameActions.setPassword(value))
    }, [dispatch])

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(authByUsernameClick(router))
    }, [dispatch])

    return (
        <DynamicModuleLoader name='authByUsernameForm' reducer={authByUsernameReducer}>
            <div className="flex gap-4 flex-col p-10 bg-white rounded-btn w-128 justify-center">
                <Text titleBig="Войти"/>
                {validErrors && (
                    validErrors.map(error => (
                        <Text theme={TextTheme.ERROR} title={error} />
                    ))
                )}
                <Input 
                    layout="Имя пользователя *"
                    placeholder="Имя пользователя"
                    onChange={onUsernameChange}
                    value={username}
                    className="w-full"
                />
                <Input 
                    layout="Пароль *"
                    placeholder="Пароль"
                    onChange={onPasswordChange}
                    value={password}
                    className="w-full"
                />
                <Button onClick={onClick}>
                    Войти
                </Button>
                <div className="flex gap-1 items-center">
                    <Text smallText="Если у вас нет аккаунта то "/>
                    <Link 
                        className="text-primary underline" 
                        href={'/sign-up'}
                    >
                        зарегестрируйтесь
                    </Link>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};