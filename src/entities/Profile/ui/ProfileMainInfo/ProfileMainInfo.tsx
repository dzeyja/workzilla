import { Text, TextAlign, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Avatar } from "shared/ui/Avatar/Avatar";
import Image from "next/image";

interface ProfileMainInfoProps {
    data?: Profile
}

export const ProfileMainInfo = (props: ProfileMainInfoProps) => {
    const { data } = props

    return (
            <div className="bg-gray w-200 mx-auto p-14 flex justify-between rounded-lg">
                <div className="w-64">
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Имя:" />
                        <Text theme={TextTheme.PRIMARY} align={TextAlign.LEFT} title={data?.first} />
                    </div>
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Фамилия:"/>
                        <Text theme={TextTheme.PRIMARY} title={data?.lastname} />
                    </div>
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Возраст:"/>
                        {data?.age ? (
                            <Text theme={TextTheme.PRIMARY} title={String(data?.age)} />
                        ) : (
                            <Text theme={TextTheme.BLACK} title={'Укажите возраст'} />
                        )}
                    </div>
                    <div className="flex gap-5">
                        <Text weight={TextWeight.MEDIUM} title="Город:"/>
                        <Text theme={TextTheme.PRIMARY} title={data?.city} />
                    </div>
                </div>
                <div>
                    {data?.avatar ? (
                        <Avatar 
                            className="mx-auto"
                            src={data?.avatar}
                            size={150}
                            borderR="50%"
                        />
                    ) : (
                        <Image 
                            src={'/icons/profile.png'}
                            width={150}
                            height={150}
                            alt="profile"
                        />
                    ) 
                    }
                </div>
            </div>
    );
};