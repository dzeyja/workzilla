"use client";

import { ExperienceLevel } from "entities/ExperienceLevel";
import { EmploymentType, fetchVacancies, getVacancyEmploymentType, getVacancyExperienceLevel, getVacancyOrder, 
    getVacancySort, getVacancyType, vacancyActions, 
    VacancySort, VacancyTypes } from "entities/Vacancy";
import { SelectTypes, SelectTypesItem } from "features/SelectTypes";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { OrderType } from "shared/types";
import { Select, SelectOption } from "shared/ui/Select/Select";

export const VacanciesPageFilters = () => {
    const dispatch = useAppDispatch()
    const type = useSelector(getVacancyType)
    const sort = useSelector(getVacancySort)
    const order = useSelector(getVacancyOrder)
    const employmentType = useSelector(getVacancyEmploymentType)
    const experienceLevel = useSelector(getVacancyExperienceLevel)

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

    const orderOptions = useMemo<SelectOption<OrderType>[]>(() => [
        { value: 'asc', content: 'По возрастанию' },
        { value: 'desc', content: 'По убыванию' },
    ], [])

    const employmentOptions = useMemo<SelectOption<EmploymentType>[]>(() => [
        { value: 'full-time', content: 'Полная занятость' },
        { value: 'part-time', content: 'Частичная занятость' },
        { value: 'contract', content: 'Контракт' },
        { value: 'internship', content: 'Стажировка' },
        { value: 'not_selected', content: 'Не выбрано' },
    ], [])

    const experienceOptions = useMemo<SelectOption<ExperienceLevel>[]>(() => [
        { value: ExperienceLevel.NO_EXPERIENCE, content: 'Без опыта' },
        { value: ExperienceLevel.JUNIOR, content: 'Junior (до 1 года)' },
        { value: ExperienceLevel.MIDDLE, content: 'Middle (1-3 года)' },
        { value: ExperienceLevel.SENIOR, content: 'Senior (3-5 лет)' },
        { value: ExperienceLevel.NULL, content: 'Не выбрано' },
    ], [])

    const sortChange = useCallback((value: VacancySort) => {
        dispatch(vacancyActions.setSort(value))
        fetchData()
    }, [])

    const typeChange = useCallback((value: VacancyTypes) => {
        dispatch(vacancyActions.setType(value))
        fetchData()
    }, [dispatch, fetchData])

    const orderChange = useCallback((value: OrderType) => {
        dispatch(vacancyActions.setOrder(value))
        fetchData()
    }, [dispatch])

    const employmentChange = useCallback((value: EmploymentType) => {
        dispatch(vacancyActions.setEmploymentType(value))
        fetchData()
    }, [dispatch, fetchData])

    const experienceChange = useCallback((value: ExperienceLevel) => {
        dispatch(vacancyActions.setExperienceLevel(value))
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
            <Select<EmploymentType>
                className='mt-2'
                label="Тип занятости"
                onChange={employmentChange}
                value={employmentType ?? 'not_selected'}
                options={employmentOptions}
            />
            <Select<ExperienceLevel>
                className='mt-2'
                label="Опыт работы"
                onChange={experienceChange}
                value={experienceLevel ?? ExperienceLevel.NULL}
                options={experienceOptions}
            />
            <Select<VacancySort> 
                className='mt-2'
                label="Сортировать по"
                onChange={sortChange}
                value={sort ?? VacancySort.DATE}
                options={options}
            />
            <Select<OrderType> 
                className='mt-2'
                label="По"
                onChange={orderChange}
                value={order ?? 'asc'}
                options={orderOptions}
            />
        </div>
    );
};