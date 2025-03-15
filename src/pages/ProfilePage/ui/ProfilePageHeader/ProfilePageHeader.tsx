"use client";

import { getProfileReadonly, profileActions, updateProfile } from "entities/Profile";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ProfilePageHeaderProps {
    readonly?: boolean
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const dispatch = useAppDispatch()
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

    return (
        <div className="w-200 border flex justify-between p-4 mx-auto mb-6">
            {readonly ? (
                <Button onClick={onEdit}>
                    Редактировать
                </Button>
            ) : (
                <>
                    <Button className="mr-4" onClick={onCancelEdit}>
                        Отменить
                    </Button>
                    <Button theme={ButtonTheme.OUTLINED} className="ml-auto" onClick={onSave}>
                        Сохранить
                    </Button>
                </>
            )}
        </div>
  );
};