import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/ProfileSchema";
import { Specialties } from "entities/Specialty";
import { ExperienceLevel } from "entities/ExperienceLevel";
import { useSelector } from "react-redux";
import { getTaskMyTasks, Task } from "entities/Task";
import Link from "next/link";
import { HStack, VStack } from "shared/ui/Stack";

interface ProfileExecutorInfoProps {
    data?: Profile
}

export const ProfileExecutorInfo = (props: ProfileExecutorInfoProps) => {
    const { data } = props

    return (
        <>
            <div className="bg-gray w-200 mx-auto p-14 rounded-lg mt-4">
                <div>
                    <Text weight={TextWeight.MEDIUM} title="Обо мне *"/>
                    <Text 
                        theme={data?.bio ? TextTheme.PRIMARY : TextTheme.BLACK} 
                        text={data?.bio ? data.bio : 'Расскажите о себе, это поможет привлечь внимание заказчика'} 
                    />
                </div>
            </div>
            <VStack gap="8" className="bg-gray w-200 mx-auto p-14 rounded-lg mt-4">
                <HStack align="center" gap='16'>
                    <Text weight={TextWeight.MEDIUM} title="Cпециальность:"/>
                    <Text 
                        theme={data?.specialty ? TextTheme.PRIMARY : TextTheme.BLACK} 
                        text={data?.specialty ? data.specialty : Specialties.NULL} 
                    />
                </HStack>
                <HStack align="center" gap="16">
                    <Text weight={TextWeight.MEDIUM} title="Опыт работы:"/>
                    <Text 
                        theme={data?.experience ? TextTheme.PRIMARY : TextTheme.BLACK} 
                        text={data?.experience ? data.experience : ExperienceLevel.NULL} 
                    />
                </HStack>
            </VStack>
        </>
    );
};