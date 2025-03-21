"use client";

import { Text, TextTheme } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
    data?: Profile
    form?: Profile
    readonly?: boolean
    onChangeFirstname?: (value?: string) => void
    onChangeLastname?: (value?: string) => void
    onChangeAge?: (value?: string) => void
    onChangeCity?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { 
        data, 
        form,
        readonly, 
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity
    } = props

    if(!readonly) {
        return (
            <div className="border w-200 mx-auto p-16 flex justify-between">
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
        )
    }

    return (
        <div className="border w-200 mx-auto p-16 flex justify-between">
            <div>
                <div className="flex gap-5">
                    <Text title="Имя:" />
                    <Text theme={TextTheme.PRIMARY} title={data?.first} />
                </div>
                <div className="flex gap-5">
                    <Text title="Фамилия:"/>
                    <Text theme={TextTheme.PRIMARY} title={data?.lastname} />
                </div>
                <div className="flex gap-5">
                    <Text title="Возраст:"/>
                    <Text theme={TextTheme.PRIMARY} title={String(data?.age)} />
                </div>
                <div className="flex gap-5">
                    <Text title="Город:"/>
                    <Text theme={TextTheme.PRIMARY} title={data?.city} />
                </div>
            </div>
            <div>
                {data?.avatar && 
                    <Avatar 
                        className="mx-auto"
                        src={data?.avatar}
                        size={150}
                        borderR="50%"
                    />
                }
            </div>
        </div>
    );
};