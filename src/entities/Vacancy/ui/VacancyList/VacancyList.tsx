"use client";

import { getVacancyData, getVacancyIsLoading } from "../../model/selectors/vacancySelector";
import { fetchVacancies } from "../../model/services/fetchVacancies/fetchVacancies";
import { vacancyReducer } from "../../model/slices/vacancySlice";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { VacancyListItem } from "../VacancyListItem/VacancyListItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Vacancy } from "entities/Vacancy/model/types/vacancy";
import { VacancyListItemSkeleton } from "../VacancyListItemSkeleton/VacancyListItemSkeleton";

export const VacancyList = () => {
    const vacancies = useSelector(getVacancyData)
    const isLoading = useSelector(getVacancyIsLoading)
    const dispatch = useAppDispatch()

    const skeleton = (
        <div className="w-full flex gap-4 flex-col">
            {
                new Array(9)
                    .fill(0)
                    .map((item, index) => (
                        <VacancyListItemSkeleton key={index} />
                    ))
            }
        </div>
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