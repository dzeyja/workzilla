import { Text, TextAlign, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Avatar } from "shared/ui/Avatar/Avatar";
import Image from "next/image";

interface ProfileMainInfoProps {
    data?: Profile
}

export const ProfileMainInfo = (props: ProfileMainInfoProps) => {
    const { data } = props
    const isExecutor = data?.role === 'executor'

    return (
            <div className="bg-gray w-200 mx-auto p-14 flex justify-between rounded-lg">
                <div className="w-96 flex flex-col gap-2">
                    <div className="flex gap-5 items-center">
                        <Text weight={TextWeight.MEDIUM} title="Имя:" />
                        <Text 
                            theme={data?.first ? TextTheme.PRIMARY : TextTheme.BLACK} 
                            text={data?.first ? data?.first : 'Укажите имя'} 
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <Text weight={TextWeight.MEDIUM} title="Фамилия:"/>
                        <Text 
                            theme={data?.lastname ? TextTheme.PRIMARY : TextTheme.BLACK} 
                            text={data?.lastname ? data?.lastname : 'Укажите фамилию'} 
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <Text weight={TextWeight.MEDIUM} title="Возраст:"/>
                        <Text 
                            theme={data?.age ? TextTheme.PRIMARY : TextTheme.BLACK} 
                            text={data?.age ? String(data?.age) : 'Укажите возраст'} 
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <Text weight={TextWeight.MEDIUM} title="Город:"/>
                        <Text 
                            theme={data?.city ? TextTheme.PRIMARY : TextTheme.BLACK} 
                            text={data?.city ? data.city : 'Укажите город'} 
                        />
                    </div>
                    <div className="flex gap-5 items-center">
                        <Text weight={TextWeight.MEDIUM} title="Роль:"/>
                        <Text 
                            theme={data?.role ? TextTheme.PRIMARY : TextTheme.BLACK} 
                            text={isExecutor ? 'Исполнитель' : 'Заказчик'} 
                        />
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