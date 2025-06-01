"use client";

import { Vacancy } from "entities/Vacancy";
import Link from "next/link";
import { Card } from "shared/ui/Card/Card";
import { VStack, HStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { useGetVacancyRecomendationsList } from "../api/getVacancyRecomendationsList";
import { Loader } from "shared/ui/Loader/Loader";

export const VacancyRecomdationsList = () => {
    const { data: vacancies, isLoading, error } = useGetVacancyRecomendationsList(4);
    
    const renderVacancyRecomendations = (vacancy: Vacancy) => (
        <Link 
            className="w-full transition-all duration-300 hover:scale-[1.02] group" 
            target="_blank" 
            href={`/vacancies/${vacancy.id}`} 
            key={vacancy.id}
            aria-label={`Перейти к вакансии ${vacancy.title}`}
        >
            <Card className="w-full cursor-pointer p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white group-hover:border-blue-100">
                <VStack gap="12">
                    <HStack gap="12" justify="between" align="center">
                        <Text 
                            text={vacancy.title} 
                            theme={TextTheme.PRIMARY} 
                            className="text-lg font-medium group-hover:text-blue-600 transition-colors duration-300"
                        />
                        
                    </HStack>
                    <HStack gap="16">
                        <HStack gap="8" align="center">
                            <Text 
                                text={vacancy.salary} 
                                className="text-gray-600 font-medium"
                            />
                        </HStack>
                        {vacancy.employment_type && (
                            <HStack gap="8" align="center">
                                <Text 
                                    text={vacancy.employment_type} 
                                    className="text-gray-500"
                                />
                            </HStack>
                        )}
                    </HStack>
                </VStack>
            </Card>
        </Link>
    );

    if (isLoading) {
        return (
            <VStack gap="16" className="w-[20%]">
                <Text 
                    weight={TextWeight.MEDIUM} 
                    title="Рекомендации" 
                    className="text-xl"
                />
                <VStack gap="12" className="w-full">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="w-full p-6 border border-gray-100">
                            <VStack gap="12">
                                <HStack gap="12" justify="between" align="center">
                                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
                                </HStack>
                                <HStack gap="16">
                                    <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-5 w-1/3 bg-gray-200 rounded animate-pulse" />
                                </HStack>
                            </VStack>
                        </Card>
                    ))}
                </VStack>
            </VStack>
        );
    }

    if (error) {
        return (
            <VStack gap="16" className="w-[20%]">
                <Text 
                    weight={TextWeight.MEDIUM} 
                    title="Рекомендации" 
                    className="text-xl"
                />
                <Card className="w-full p-6 border border-red-100 bg-red-50">
                    <Text 
                        text="Не удалось загрузить рекомендации" 
                        theme={TextTheme.ERROR}
                        className="text-center"
                    />
                </Card>
            </VStack>
        );
    }

    if (!vacancies?.length) {
        return (
            <VStack gap="16" className="w-[20%]">
                <Text 
                    weight={TextWeight.MEDIUM} 
                    title="Рекомендации" 
                    className="text-xl"
                />
                <Card className="w-full p-6 border border-gray-100">
                    <Text 
                        text="Нет доступных рекомендаций" 
                        theme={TextTheme.SECONdARY}
                        className="text-center"
                    />
                </Card>
            </VStack>
        );
    }

    return (
        <VStack gap="16" className="w-[20%]">
            <HStack gap="8" align="center">
                <Text 
                    weight={TextWeight.MEDIUM} 
                    title="Рекомендации" 
                    className="text-xl"
                />
            </HStack>
            <VStack gap="12" className="w-full">
                {vacancies.map(renderVacancyRecomendations)}
            </VStack>
        </VStack>
    );
};