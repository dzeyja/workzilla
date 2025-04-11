"use client";

import React, { useCallback, useMemo } from "react";
import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/Input/Input";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { getSignUpPassword, getSignUpRole, getSignUpUsername, getSignUpValidateError } from "../../model/selectors/signUpSelectors";
import { signUpActions, signUpReducer } from "../../model/slice/signUpSlice";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { UserRole } from "entities/User";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpClick } from "../../model/services/signUpClick/signUpClick";
import { Text, TextTheme } from "shared/ui/Text/Text";

export const SignUpForm = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const password = useSelector(getSignUpPassword)
    const username = useSelector(getSignUpUsername)
    const role = useSelector(getSignUpRole)
    const validateError = useSelector(getSignUpValidateError)

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(signUpClick(router))
    }, [dispatch, router])

    const onChangeUsername = useCallback((value: string) => {
        dispatch(signUpActions.setUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(signUpActions.setPassword(value))
    }, [dispatch])

    const onChangeRole = useCallback((newRole: UserRole) => {
        dispatch(signUpActions.setRole(newRole))
    }, [dispatch])

    const optionsList = useMemo<SelectOption<UserRole>[]>(() => [
        {
            content: 'Исполнитель',
            value: 'executor'
        },
        {
            content: 'Заказчик',
            value: 'customer'
        },
    ], []) 

    return (
        <DynamicModuleLoader name='signUpForm' reducer={signUpReducer}>
            <div className="flex gap-4 flex-col p-10 bg-white rounded-btn w-128 justify-center">
                <Text titleBig="Зарегестрироватся" />
                {validateError && (
                    validateError.map(error => (
                        <Text key={error} theme={TextTheme.ERROR} title={error} />
                    ))
                )}
                <Input 
                    layout="Имя пользователя *"
                    placeholder="Имя пользователя"
                    onChange={onChangeUsername}
                    value={username}
                    className="w-full"
                />
                <Input 
                    layout="Пароль *"
                    placeholder="Пароль"
                    onChange={onChangePassword}
                    value={password}
                    className="w-full"
                />
                <Select<UserRole> 
                    label="Вы" 
                    options={optionsList} 
                    value={role}
                    onChange={onChangeRole}
                />
                <Button onClick={onClick}>
                    Зарегестрироватся
                </Button>
                <div className="flex items-center gap-1">
                    <Text smallText="Если у вас есть аккаунт то "/>
                    <Link 
                        className="text-primary underline" 
                        href={'/auth'}
                    >
                        войдите
                    </Link>
                </div>
            </div>
        </DynamicModuleLoader>
    );
};