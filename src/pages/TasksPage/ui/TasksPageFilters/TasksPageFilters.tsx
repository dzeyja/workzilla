"use client";

import { fetchTasks, getTaskSort, getTaskTypes, taskActions, TaskSortField, TaskTypes } from "entities/Task";
import { SelectTypes, SelectTypesItem,  } from "features/SelectTypes";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Select, SelectOption } from "shared/ui/Select/Select";

export const TasksPageFilters = () => {
    const dispatch = useAppDispatch()
    const type = useSelector(getTaskTypes)
    const task = useSelector(getTaskSort)

    const fetchData = () => {
        dispatch(fetchTasks())
    }

    const onChangeTypes = useCallback((value: TaskTypes) => {
        dispatch(taskActions.setType(value))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((value: TaskSortField) => {
        dispatch(taskActions.setSort(value))
        fetchData()
    }, [dispatch, fetchData])

    const tabs = useMemo<SelectTypesItem<TaskTypes>[]>(() => [
        {
            content: 'Все',
            value: TaskTypes.ALL,
        },
        {
            content: 'Разработка',
            value: TaskTypes.Development
        },
        {
            content: 'Дизайн',
            value: TaskTypes.Design
        },
        {
            content: 'Аналитика',
            value: TaskTypes.Analytics
        },
        {
            content: 'Документация',
            value: TaskTypes.Documentation
        },
        {
            content: 'Обучение',
            value: TaskTypes.Education
        },
    ], [])

    const options = useMemo<SelectOption<TaskSortField>[]>(() => [
        { value: TaskSortField.CreatedAt, content: 'По дате' },
        { value: TaskSortField.Deadline, content: 'По дедлайну' },
        { value: TaskSortField.Title, content: 'По названию' },
        { value: TaskSortField.Status, content: 'По статусу' },
        { value: TaskSortField.Priority, content: 'По приоритету' },
    ], [])

    return (
        <div className="w-[20%]">
            <SelectTypes<TaskTypes> 
                className="w-full"
                title="Категории"
                onChange={onChangeTypes}
                items={tabs}
                value={type ?? TaskTypes.ALL}
            />
            <Select<TaskSortField>
                value={task ?? TaskSortField.CreatedAt}
                options={options}
                onChange={onChangeSort}
                label="Сортировать по"
                className="mt-2 w-full"
            />
        </div>
    );
};