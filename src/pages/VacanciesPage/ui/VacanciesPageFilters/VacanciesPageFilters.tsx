"use client";

import { fetchVacancies, getVacancySort, getVacancyType, vacancyActions, VacancySort, VacancyTypes } from "entities/Vacancy";
import { SelectTypes, SelectTypesItem } from "features/SelectTypes";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Select, SelectOption } from "shared/ui/Select/Select";

export const VacanciesPageFilters = () => {
    const dispatch = useAppDispatch()
    const type = useSelector(getVacancyType)
    const sort = useSelector(getVacancySort)

    const fetchData = () => {
        dispatch(fetchVacancies())
    }

    const tabs = useMemo<SelectTypesItem<VacancyTypes>[]>(() => [
        {
            content: 'Все',
            value: VacancyTypes.ALL,
        },
        {
            content: 'Разработка',
            value: VacancyTypes.DEVELOPMENT
        },
        {
            content: 'Дизайн',
            value: VacancyTypes.DESIGN
        },
        {
            content: 'Аналитика',
            value: VacancyTypes.ANALYTICS
        },
        {
            content: 'Маркетинг',
            value: VacancyTypes.MARKETING
        },
    ], [])

    const options = useMemo<SelectOption<VacancySort>[]>(() => [
        { value: VacancySort.DATE, content: 'По дате' },
        { value: VacancySort.SALARY, content: 'По зарплате' },
        { value: VacancySort.TITLE, content: 'По названию' },
    ], [])

    const sortChange = useCallback((value: VacancySort) => {
        dispatch(vacancyActions.setSort(value))
        fetchData()
    }, [])

    const typeChange = useCallback((value: VacancyTypes) => {
        dispatch(vacancyActions.setType(value))
        fetchData()
    }, [dispatch, fetchData])

    return (
        <div>
            <SelectTypes<VacancyTypes> 
                title="Категории"
                value={type ?? VacancyTypes.ALL} 
                items={tabs} 
                onChange={typeChange}  
            />
            <Select<VacancySort> 
                className='mt-2'
                label="Сортировать по"
                onChange={sortChange}
                value={sort ?? VacancySort.DATE}
                options={options}
            />
        </div>
    );
};