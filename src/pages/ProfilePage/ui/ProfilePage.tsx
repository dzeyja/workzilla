"use client";

import { 
    fetchProfile, 
    getProfileData, 
    getProfileFormData, 
    getProfileReadonly, 
    profileActions, 
    ProfileCard 
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "shared/ui/Page/Page";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const profileData = useSelector(getProfileData)
    const profileFormData = useSelector(getProfileFormData)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }))
    }, [dispatch])

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }))
    }, [dispatch])


    return (
        <Page>
            <ProfilePageHeader />
            <ProfileCard 
                data={profileData} 
                form={profileFormData}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
            />
        </Page>
    );
};