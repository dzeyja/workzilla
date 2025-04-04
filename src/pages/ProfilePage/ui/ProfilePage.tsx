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
import { getUserAuthData, userActions, UserRole } from "entities/User";
import { Specialties } from "entities/Specialty";
import { ExperienceLevel } from "entities/ExperienceLevel";

export const ProfilePage = () => {
    const dispatch = useAppDispatch()
    const user = useSelector(getUserAuthData)
    const isLoading = useSelector(getProfileIsLoading)
    const profileData = useSelector(getProfileData)
    const profileFormData = useSelector(getProfileFormData)
    const readonly = useSelector(getProfileReadonly)

    useEffect(() => {
        if (user?.id) {
            dispatch(fetchProfile())
        }
    }, [dispatch, user?.id])

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

    const onChangeBio = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ bio: value || '' }))
    }, [dispatch])

    const onChangeSpecialty = useCallback((value?: Specialties) => {
        dispatch(profileActions.updateProfile({ specialty: value || Specialties.NULL }))
    }, [dispatch])

    const onChangeExperience = useCallback((value?: ExperienceLevel) => {
        dispatch(profileActions.updateProfile({ experience: value || ExperienceLevel.NULL }))
    }, [dispatch])

    const onChangeRole = useCallback((value?: UserRole) => {
        dispatch(profileActions.updateProfile({role: value || 'null'}))
        dispatch(userActions.setUserRole(value || 'null'))
    }, [dispatch])

    const onChangeEmail = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ email: value || ''}))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducer={profileReducer} name='profile'>
            <Page>
                <ProfilePageHeader />
                <ProfileCard 
                    isLoading={isLoading}
                    data={profileData} 
                    user={user}
                    form={profileFormData}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeBio={onChangeBio}
                    onChangeExperience={onChangeExperience}
                    onChangeSpecialty={onChangeSpecialty}
                    onChangeRole={onChangeRole}
                    onChangeEmail={onChangeEmail}
                />
            </Page>
        </DynamicModuleLoader>
    );
};