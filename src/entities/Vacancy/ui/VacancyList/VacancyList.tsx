"use client";

import { getVacancyData, getVacancyIsLoading } from "../../model/selectors/vacancySelector";
import { fetchVacancies } from "../../model/services/fetchVacancies/fetchVacancies";
import { vacancyReducer } from "../../model/slices/vacancySlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { VacancyListItem } from "../VacancyListItem/VacancyListItem";
import { Vacancy } from "entities/Vacancy/model/types/vacancy";
import { VacancyListItemSkeleton } from "../VacancyListItemSkeleton/VacancyListItemSkeleton";
import { VStack } from "shared/ui/Stack";

export const VacancyList = () => {
    const vacancies = useSelector(getVacancyData)
    const isLoading = useSelector(getVacancyIsLoading)
    const dispatch = useAppDispatch()

    const skeleton = (
        <VStack max gap="16">
            {
                new Array(9)
                    .fill(0)
                    .map((item, index) => (
                        <VacancyListItemSkeleton key={index} />
                    ))
            }
        </VStack>
    );

    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch])

    const renderVacancies = (vacancy: Vacancy) => (
        <VacancyListItem 
            vacancy={vacancy}
            key={vacancy.id}
        />
    )

    return (
        <DynamicModuleLoader name='vacancy' reducer={vacancyReducer}>
            <div className="w-5xl">
                {isLoading && skeleton}
                {vacancies?.map(renderVacancies)}
            </div>
        </DynamicModuleLoader>
    );
};