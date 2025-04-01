import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Specialties } from "entities/Specialty";
import { ExperienceLevel } from "entities/ExperienceLevel";

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
                    <Text 
                        theme={data?.bio ? TextTheme.PRIMARY : TextTheme.BLACK} 
                        text={data?.bio ? data.bio : 'Расскажите о себе, это поможет привлечь внимание заказчика'} 
                    />
                </div>
            </div>
            <div className="bg-gray w-200 mx-auto p-14 rounded-lg mt-4 flex flex-col gap-2">
                <div className="flex gap-5 items-center">
                    <Text weight={TextWeight.MEDIUM} title="Cпециальность:"/>
                    <Text 
                        theme={data?.specialty ? TextTheme.PRIMARY : TextTheme.BLACK} 
                        text={data?.specialty ? data.specialty : Specialties.NULL} 
                    />
                </div>
                <div className="flex gap-5 items-center">
                    <Text weight={TextWeight.MEDIUM} title="Опыт работы:"/>
                    <Text 
                        theme={data?.experience ? TextTheme.PRIMARY : TextTheme.BLACK} 
                        text={data?.experience ? data.experience : ExperienceLevel.NULL} 
                    />
                </div>
            </div>
        </>
    );
};