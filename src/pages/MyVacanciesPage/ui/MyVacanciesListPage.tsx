"use client";

import { Page } from "shared/ui/Page/Page";
import { useGetMyVacanciesList } from "../api/getMyVacancies";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Vacancy } from "entities/Vacancy";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import Link from "next/link";
import { HStack, VStack } from "shared/ui/Stack";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Loader } from "shared/ui/Loader/Loader";
import { VacancuResponseModal } from "entities/VacancyResponses";
import { useCallback, useState } from "react";

const MyVacanciesListPage = () => {
    const user = useSelector(getUserAuthData)
    console.log(user)
    const [selectVacancyId, setSelectVacancyId] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const { data: vacancies, isLoading, error} = useGetMyVacanciesList(user?.id || '', {
        skip: !user?.id,
    });
    
    if (error) {
        return (
            <Page>
                <Text title="Произошла ошибка" theme={TextTheme.ERROR} />
            </Page>
        )
    }

    const onOpenClick = useCallback((vacancyId: string) => {
        setSelectVacancyId(vacancyId)
        setIsOpen(true)
    }, [selectVacancyId, isOpen])

    const closeResponsesModal = useCallback(() => {
        setSelectVacancyId('')
        setIsOpen(false)
    }, []);

    const renderMyVacancy = (vacancy: Vacancy) => (
            <HStack justify="between" align="center" max key={vacancy.id} className="p-4 border-b border-gray-400 hover:bg-gray-300 cursor-pointer">
                <Link href={`/vacancies/${vacancy.id}`} key={vacancy.id} >
                    <div>
                        <Text text={vacancy.title} weight={TextWeight.MEDIUM} />
                        <Text smallText={vacancy.salary} theme={TextTheme.SECONdARY} />
                    </div>
                </Link>
                <Button onClick={() => onOpenClick(vacancy.id)} theme={ButtonTheme.OUTLINED}>
                    Отклики
                </Button>
            </HStack>
    )

    return (
        <>
            <Text titleBig="Список моих вакансии" />
            {isLoading ? (
                <VStack className="h-116" justify="center" align="center" max>
                    <Loader />
                </VStack>
            ) : (
                vacancies?.map(renderMyVacancy)
            )}
            <VacancuResponseModal onClose={closeResponsesModal} vacancyId={selectVacancyId} isOpen={isOpen}/>
        </>
    );
};

export default MyVacanciesListPage;