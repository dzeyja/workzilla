"use client";

import { fetchTasks, getTaskPriority, getTaskSort, 
    getTaskTypes, taskActions, TaskPriority, 
    TaskSortField, TaskTypes, getTaskOrder } from "entities/Task";
import { SelectTypes, SelectTypesItem,  } from "features/SelectTypes";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { OrderType } from "shared/types";
import { Select, SelectOption } from "shared/ui/Select/Select";

export const TasksPageFilters = () => {
    const dispatch = useAppDispatch()
    const type = useSelector(getTaskTypes)
    const task = useSelector(getTaskSort)
    const priority = useSelector(getTaskPriority)
    const order = useSelector(getTaskOrder)

    const fetchData = () => {
        dispatch(fetchTasks())
    }

    
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

    const priorityOptions = useMemo<SelectOption<TaskPriority>[]>(() => [
        { value: 'low', content: 'Низкий' },
        { value: 'medium', content: 'Средний' },
        { value: 'high', content: 'Высокий' },
        { value: 'not_selected', content: 'Не выбран' },
    ], [])

    const orderOptions = useMemo<SelectOption<OrderType>[]>(() => [
        { value: 'asc', content: 'По возрастанию' },
        { value: 'desc', content: 'По убыванию' },
    ], [])

    const onChangeTypes = useCallback((value: TaskTypes) => {
        dispatch(taskActions.setType(value))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeSort = useCallback((value: TaskSortField) => {
        dispatch(taskActions.setSort(value))
        fetchData()
    }, [dispatch, fetchData])

    const onChangePriority = useCallback((value: TaskPriority) => {
        dispatch(taskActions.setPriority(value))
        fetchData()
    }, [dispatch, fetchData])

    const onChangeOrder = useCallback((value: OrderType) => {
        dispatch(taskActions.setOrder(value))
        fetchData()
    }, [dispatch, fetchData])

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
            <Select<TaskPriority>
                value={priority ?? 'not_selected'}
                options={priorityOptions}
                onChange={onChangePriority}
                label="Приоритет"
                className="mt-2 w-full"
            />
            <Select<OrderType>
                value={order ?? 'asc'}
                options={orderOptions}
                onChange={onChangeOrder}
                label="По"
                className="mt-2 w-full"
            />
        </div>
    );
};