import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";

interface ProfileExecutorInfoProps {
    data?: Profile
}

export const ProfileExecutorInfo = (props: ProfileExecutorInfoProps) => {
    const { data } = props

    return (
        <>
            <div className="bg-gray w-200 mx-auto p-14 rounded-lg mt-4">
                <div className="">
                    <Text weight={TextWeight.MEDIUM} title="Обо мне *"/>
                    <Text theme={TextTheme.PRIMARY} title={data?.bio} />
                </div>
            </div>
            <div className="bg-gray w-200 mx-auto p-14 rounded-lg mt-4">
                <div className="flex gap-5">
                    <Text weight={TextWeight.MEDIUM} title="Cпециальность:"/>
                    <Text theme={TextTheme.PRIMARY} title={data?.specialty} />
                </div>
                <div className="flex gap-5">
                    <Text weight={TextWeight.MEDIUM} title="Опыт работы:"/>
                    <Text theme={TextTheme.PRIMARY} title={data?.experience} />
                </div>
            </div>
        </>
    );
};