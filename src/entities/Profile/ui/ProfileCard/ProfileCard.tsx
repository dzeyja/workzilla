"use client";

import { Text, TextAlign, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { User } from "entities/User";
import { SelectSpecialty, Specialties } from "entities/Specialty";
import { ExperienceLevel, SelectExperienceLvl } from "entities/ExperienceLevel";
import { ProfileMainInfo } from "../ProfileMainInfo/ProfileMainInfo";
import { ProfileExecutorInfo } from "../ProfileExecutorInfo/ProfileExecutorInfo";

interface ProfileCardProps {
    data?: Profile
    form?: Profile
    user?: User
    readonly?: boolean
    isLoading?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    onChangeSpecialty?: (value?: Specialties) => void
    onChangeBio?: (value?: string) => void
    onChangeExperience?: (value?: ExperienceLevel) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { 
        data, 
        form,
        user,
        readonly, 
        isLoading,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeSpecialty,
        onChangeBio,
        onChangeExperience
    } = props

    const isExecutor = user?.role === 'executor'

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
                <div className="w-200 mx-auto p-16 flex justify-between bg-gray rounded-lg">
                    <div>
                        <div className="flex gap-5">
                            <Text title="Имя:" />
                            <Input 
                                placeholder="Введите имя" 
                                onChange={onChangeFirstname}
                                value={form?.first}
                            />
                        </div>
                        <div className="flex gap-5">
                            <Text title="Фамилия:"/>
                            <Input 
                                placeholder="Введите фамилию" 
                                onChange={onChangeLastname} 
                                value={form?.lastname}   
                            />
                        </div>
                        <div className="flex gap-5">
                            <Text title="Возраст:"/>
                            <Input 
                                placeholder="Введите возраст" 
                                onChange={onChangeAge}
                                value={form?.age}
                            />
                        </div>
                        <div className="flex gap-5">
                            <Text title="Город:"/>
                            <Input 
                                placeholder="Введите город" 
                                onChange={onChangeCity}    
                                value={form?.city}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-200 mx-auto p-16 bg-gray rounded-lg mt-4">
                    <div className="flex gap-5">
                        <Text title="Обо мне:"/>
                        <Input 
                            placeholder="Введите информацию о себе" 
                            onChange={onChangeBio}    
                            value={form?.bio}
                        />
                    </div>
                </div>
                <div className="w-200 mx-auto p-16 bg-gray rounded-lg mt-4">
                    <div className="flex gap-5">
                        <Text title="Специальность:"/>
                        <SelectSpecialty value={form?.specialty} onChange={onChangeSpecialty} />
                    </div>
                    <div className="flex gap-5">
                        <Text title="Опыт работы:"/>
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