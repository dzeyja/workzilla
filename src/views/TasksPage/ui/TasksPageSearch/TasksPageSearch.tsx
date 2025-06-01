"use client";

import { fetchTasks, getTaskSearch, taskActions } from "entities/Task";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import { Input } from "shared/ui/Input/Input";

export const TasksPageSearch = () => {
    const seacrh = useSelector(getTaskSearch)
    const dispatch = useAppDispatch()

    const fetchTasksData = () => {
        dispatch(fetchTasks())
    }
    
    const debounceFetchTasks = useDebounce(fetchTasksData, 500)

    const onChangeSearch = useCallback((value: string) => {
        dispatch(taskActions.setSearch(value))
        debounceFetchTasks()
    }, [dispatch])

    return (
        <div className="w-full">
            <Input
                className="w-full"
                placeholder="Поиск"
                value={seacrh}
                onChange={onChangeSearch}
            />
        </div>
    );
};