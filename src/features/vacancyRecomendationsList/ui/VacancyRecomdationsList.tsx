"use client";

import { Vacancy } from "entities/Vacancy";
import Link from "next/link";
import { Card } from "shared/ui/Card/Card";
import { VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { useGetVacancyRecomendationsList } from "../api/getVacancyRecomendationsList";

export const VacancyRecomdationsList = () => {
    const { data: vacancies, isLoading, error } = useGetVacancyRecomendationsList(4)
    
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