"use client";

import { fetchVacancies, getVacancyData, Vacancy } from "entities/Vacancy";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Card } from "shared/ui/Card/Card";
import { VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";

export const VacancyRecomdationsList = () => {
    const dispatch = useAppDispatch()
    const vacancies = useSelector(getVacancyData)

    useEffect(() => {
        dispatch(fetchVacancies(4))
    }, [])

    const renderVacancyRecomendations = (vacancy: Vacancy) => (
        <Link target="_blank" href={`/vacancies/${vacancy.id}`} key={vacancy.id} >
            <Card className="w-full cursor-pointer">
                <Text text={vacancy.title} theme={TextTheme.PRIMARY} />
                <Text text={vacancy.salary} />
            </Card>
        </Link>
    )

    return (
        <VStack gap="8">
            <Text weight={TextWeight.MEDIUM} title="Рекомендаций" />
            {vacancies?.map(renderVacancyRecomendations)}
        </VStack>
    );
};