"use client";

import { getVacancyData } from "../../model/selectors/vacancySelector";
import { fetchVacancies } from "../../model/services/fetchVacancies/fetchVacancies";
import { vacancyReducer } from "../../model/slices/vacancySlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { VacancyListItem } from "../VacancyListItem/VacancyListItem";

export const VacancyList = () => {
    const vacancies = useSelector(getVacancyData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchVacancies())
    }, [dispatch])

    return (
        <DynamicModuleLoader name='vacancy' reducer={vacancyReducer}>
            <div>
                {vacancies?.map((vacancy) => (
                   <VacancyListItem vacancy={vacancy} />
                ))}
            </div>
        </DynamicModuleLoader>
    );
};