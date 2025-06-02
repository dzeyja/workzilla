"use client";

import { getProfileReadonly, profileActions, updateProfile } from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";

interface ProfilePageHeaderProps {
    readonly?: boolean
    paramsId?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        paramsId
    } = props

    
    const dispatch = useAppDispatch()
    const user = useSelector(getUserAuthData)
    const readonly = useSelector(getProfileReadonly)
    
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfile())
    }, [dispatch])

    const isMyProfile = String(user?.id) === String(paramsId)

    return (
        <div className="w-200 flex items-center justify-between p-4 mx-auto mb-6 rounded-lg bg-gray">
            <Text title={`${isMyProfile ? 'Мой профиль' : 'Профиль'}`} weight={TextWeight.MEDIUM} theme={TextTheme.PRIMARY} />
            {isMyProfile && ( readonly ? (
                <>
                    <Button onClick={onEdit}>
                        Редактировать
                    </Button>
                </>
            ) : (
                <>
                    <Button className="mr-4" onClick={onCancelEdit}>
                        Отменить
                    </Button>
                    <Button theme={ButtonTheme.OUTLINED} className="ml-auto" onClick={onSave}>
                        Сохранить
                    </Button>
                </>
            ))}
        </div>
  );
};