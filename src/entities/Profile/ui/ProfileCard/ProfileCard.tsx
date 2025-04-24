"use client";

import { Text, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { UserRole } from "entities/User";
import { SelectSpecialty, Specialties } from "entities/Specialty";
import { ExperienceLevel, SelectExperienceLvl } from "entities/ExperienceLevel";
import { ProfileMainInfo } from "../ProfileMainInfo/ProfileMainInfo";
import { ProfileExecutorInfo } from "../ProfileExecutorInfo/ProfileExecutorInfo";
import { ProfileSelectRole } from "../ProfileSelectRole/ProfileSelectRole";

interface ProfileCardProps {
    data?: Profile
    form?: Profile
    readonly?: boolean
    isLoading?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeSpecialty?: (value?: Specialties) => void
    onChangeBio?: (value?: string) => void
    onChangeExperience?: (value?: ExperienceLevel) => void
    onChangeRole?: (value?: UserRole) => void
    onChangeEmail?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { 
        data, 
        form,
        readonly, 
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeSpecialty,
        onChangeBio,
        onChangeExperience,
        onChangeRole,
        onChangeEmail
    } = props

    const isExecutor = data?.role === 'executor'

    console.log(isExecutor)

    if(isLoading) {
        return (
            <div className="w-200 mx-auto p-20 flex justify-center bg-gray rounded-lg">
               <Loader />
            </div>
        )
    }

    if(!readonly) {
        return (
            <>
                <div className="w-200 mx-auto p-16 bg-gray rounded-lg">
                    <div className="flex flex-col gap-6 w-full w-64">
                        <div className="flex justify-between items-center w-full">
                            <Text className="min-w-[100px]" weight={TextWeight.MEDIUM} title="Имя:" />
                            <Input className="w-64" placeholder="Введите имя" onChange={onChangeFirstname} value={form?.first} />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <Text className="min-w-[100px]" weight={TextWeight.MEDIUM} title="Фамилия:" />
                            <Input className="w-64" placeholder="Введите фамилию" onChange={onChangeLastname} value={form?.lastname} />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <Text className="min-w-[100px]" weight={TextWeight.MEDIUM} title="Возраст:" />
                            <Input className="w-64" placeholder="Введите возраст" onChange={onChangeAge} value={form?.age} />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <Text className="min-w-[100px]" weight={TextWeight.MEDIUM} title="Город:" />
                            <Input className="w-64" placeholder="Введите город" onChange={onChangeCity} value={form?.city} />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <Text className="min-w-[100px]" weight={TextWeight.MEDIUM} title="Город:" />
                            <ProfileSelectRole value={form?.role} onChange={onChangeRole} />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <Text className="min-w-[100px]" weight={TextWeight.MEDIUM} title="Город:" />
                            <Input className="w-64" placeholder="Введите email" value={form?.email} onChange={onChangeEmail} />
                        </div>
                    </div>
                </div>
                <div className="w-200 mx-auto p-16 bg-gray rounded-lg mt-4">
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Обо мне:"/>
                        <Input 
                            placeholder="Введите информацию о себе" 
                            onChange={onChangeBio}    
                            value={form?.bio}
                        />
                    </div>
                </div>
                <div className="w-200 mx-auto flex flex-col gap-2 p-16 bg-gray rounded-lg mt-4">
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Специальность:"/>
                        <SelectSpecialty value={form?.specialty} onChange={onChangeSpecialty} />
                    </div>
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Опыт работы:"/>
                        <SelectExperienceLvl value={form?.experience} onChange={onChangeExperience} />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <ProfileMainInfo data={data} />
            {isExecutor && (
                <ProfileExecutorInfo data={data} />
            )}
        </>
    );
};