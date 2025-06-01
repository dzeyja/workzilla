"use client";

import { fetchVacancies, getVacancySearch, vacancyActions } from "entities/Vacancy";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { Input } from "shared/ui/Input/Input";

export const VacanciesPageSearch = () => {
    const dispatch = useAppDispatch()
    const search = useSelector(getVacancySearch)

    const fetchVacancy = useCallback(() => {
        dispatch(fetchVacancies())
    }, [dispatch])

    const debouanceFetchVacencies = useDebounce(fetchVacancy, 500)

    const onChangeSearch = useCallback((value: string) => {
        dispatch(vacancyActions.setSearch(value))
        debouanceFetchVacencies()
    }, [dispatch, debouanceFetchVacencies])

    return (
        <div className="mb-8">
            <Input 
                className="w-full"
                placeholder="Поиск..."
                value={search ?? ''}
                onChange={onChangeSearch}
            />
        </div>
    );
};