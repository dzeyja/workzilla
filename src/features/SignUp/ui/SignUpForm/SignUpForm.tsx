"use client";

import React, { useCallback, useMemo } from "react";
import { Button } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/Input/Input";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { getSignUpPassword, getSignUpRole, getSignUpUsername } from "../../model/selectors/signUpSelectors";
import { signUpActions, signUpReducer } from "../../model/slice/signUpSlice";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { UserRole } from "entities/User";
import { signUp } from "../../model/services/signUp/signUp";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    const password = useSelector(getSignUpPassword)
    const username = useSelector(getSignUpUsername)
    const role = useSelector(getSignUpRole)

    const onClick = useCallback( async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
            try {
                const result = await dispatch(signUp()).unwrap()
    
                if (result) {
                    router.push('/profile')
                }
                
            } catch(e) {
                console.log(e)
            } finally {
                dispatch(signUpActions.setUsername(''))
                dispatch(signUpActions.setPassword(''))
            }
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
                <div className="text-xxl">Зарегестрироватся</div>
                <Input 
                    placeholder="Имя пользователя"
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input 
                    placeholder="Пароль"
                    onChange={onChangePassword}
                    value={password}
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
            </div>
        </DynamicModuleLoader>
    );
};