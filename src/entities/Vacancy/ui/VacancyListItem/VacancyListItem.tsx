"use client"

import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { Vacancy } from "../../model/types/vacancy";
import Link from "next/link";
import { Button, ButtonSize } from "shared/ui/Button/Button";
import { VStack } from "shared/ui/Stack";
import { useGetVacancyResponses } from "entities/VacancyResponses";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface VacancyListItemProps {
    vacancy: Vacancy
}

export const VacancyListItem = ({ vacancy }: VacancyListItemProps) => {
    const user = useSelector(getUserAuthData)
    const { data: responses } = useGetVacancyResponses(vacancy?.id || '')

    const hasResponded = responses?.some(response => response.user_id === user?.id)
    const myResponse = responses?.find(response => response.user_id === user?.id)

    return (
        <Link href={`/vacancies/${vacancy.id}`}>
            <VStack role="div" className="p-8 cursor-pointer bg-gray mb-4 rounded-btn hover:scale-101 duration-300 hover:shadow-md duration-300">
                <Text title={vacancy.title} theme={TextTheme.PRIMARY} />
                <Text text={vacancy.salary} weight={TextWeight.MEDIUM} />
                <Text smallText={vacancy.description} theme={TextTheme.SECONdARY} />
                {hasResponded ? (
                     <>  
                        {myResponse?.status === 'accepted' && (
                            <Text text="Вы приглашены" theme={TextTheme.SUCCESS} />
                        )}
                        {myResponse?.status === 'rejected' && (
                            <Text text="Вам отказали" theme={TextTheme.ERROR} />
                        )}
                        {myResponse?.status === 'pending' && (
                            <Text text="Ваш отклик на рассмотрении" theme={TextTheme.PRIMARY} />
                        )}
                    </>
                ) : (
                    <Button className="mt-2" size={ButtonSize.M}>
                        Откликнуться
                    </Button>
                )}
            </VStack>
        </Link>
    );
};