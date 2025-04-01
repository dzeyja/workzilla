"use client";

import React, { useCallback } from "react";
import { getAuthByUsername, getAuthByUsernamePassword } from "../../model/selectors/authByUsername";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { authByUsernameActions, authByUsernameReducer } from "../../model/slice/authByUsernameSlice";
import { authByUsername } from "../../model/services/authByUsername/authByUsername";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/Input/Input";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import Link from "next/link";

export const LoginModal = () => {
    const username = useSelector(getAuthByUsername)
    const password = useSelector(getAuthByUsernamePassword)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const onUsernameChange = useCallback((value: string) => {
        dispatch(authByUsernameActions.setUsername(value))
    }, [dispatch])
    
    const onPasswordChange = useCallback((value: string) => {
        dispatch(authByUsernameActions.setPassword(value))
    }, [dispatch])

    const onClick = useCallback( async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        try {
            const result = await dispatch(authByUsername()).unwrap()

            if (result) {
                router.push('/')
            }
        } catch(e) {
            console.log(e)
        } finally {
            dispatch(authByUsernameActions.setUsername(''))
            dispatch(authByUsernameActions.setPassword(''))
        }
    }, [dispatch, redirect])

    return (
        <DynamicModuleLoader name='authByUsernameForm' reducer={authByUsernameReducer}>
            <div className="flex gap-4 flex-col p-10 bg-white rounded-btn w-128 justify-center">
                <div className="text-xxl">Войти</div>
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
                <div>
                    Если у вас нет аккаунта то{' '}
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