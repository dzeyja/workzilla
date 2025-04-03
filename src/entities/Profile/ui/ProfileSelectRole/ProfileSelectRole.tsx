"use client";

import { UserRole } from "entities/User";
import { useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";

interface ProfileSelectRoleProps {
    value?: UserRole
    onChange?: (value?: UserRole) => void
}

export const ProfileSelectRole = (props: ProfileSelectRoleProps) => {
    const { value, onChange } = props

    const selectOptions = useMemo<SelectOption<UserRole>[]>(() => [
        {
            content: 'Исполнитель',
            value: 'executor'
        },
        {
            content: 'Заказчик',
            value: 'customer'
        },
        {
            content: 'Не указан',
            value: 'null'
        },
    ], [])

    const onChangeHandler = useCallback((value: UserRole) => {
        onChange?.(value)
    }, [onChange])
    
    return <Select 
                options={selectOptions}
                value={value}
                onChange={onChangeHandler}
            />
};