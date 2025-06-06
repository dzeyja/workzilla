"use client";

import { 
    fetchProfile, 
    getProfileData, 
    getProfileFormData, 
    getProfileIsLoading, 
    getProfileReadonly, 
    getProfileValidateErrors, 
    profileActions, 
    ProfileCard, 
    profileReducer
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Page } from "shared/ui/Page/Page";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getUserAuthData, updateUserRole, UserRole } from "entities/User";
import { Specialties } from "entities/Specialty";
import { ExperienceLevel } from "entities/ExperienceLevel";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useParams } from "next/navigation";

export const ProfilePage = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const user = useSelector(getUserAuthData)
    const isLoading = useSelector(getProfileIsLoading)
    const profileData = useSelector(getProfileData)
    const profileFormData = useSelector(getProfileFormData)
    const readonly = useSelector(getProfileReadonly)
    const validateErrors = useSelector(getProfileValidateErrors)

    useEffect(() => {
        if (params?.id) {
            dispatch(fetchProfile(Number(params.id)))
        }
    }, [dispatch, params?.id])

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }))
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
        dispatch(updateUserRole(value || 'null'))
    }, [dispatch])

    const onChangeEmail = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ email: value || ''}))
    }, [dispatch])

    return (
            <Page>
                <ProfilePageHeader paramsId={String(params?.id)}/>
                <div className="w-200 mx-auto">
                    {validateErrors && (
                        validateErrors.map(error => (
                            <Text className="mx-auto" theme={TextTheme.ERROR} title={error}/>
                        ))
                    )}
                </div>
                <ProfileCard 
                    isLoading={isLoading}
                    data={profileData} 
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
    );
};