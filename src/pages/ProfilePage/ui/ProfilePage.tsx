"use client";

import { 
    fetchProfile, 
    getProfileData, 
    getProfileFormData, 
    getProfileIsLoading, 
    getProfileReadonly, 
    profileActions, 
    ProfileCard, 
    profileReducer
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "shared/ui/Page/Page";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(getProfileIsLoading)
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
        <DynamicModuleLoader reducer={profileReducer} name='profile'>
            <Page>
                <ProfilePageHeader />
                <ProfileCard 
                    isLoading={isLoading}
                    data={profileData} 
                    form={profileFormData}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                />
            </Page>
        </DynamicModuleLoader>
    );
};