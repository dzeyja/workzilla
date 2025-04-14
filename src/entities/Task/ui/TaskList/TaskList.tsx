"use client";

import { Task } from "entities/Task/model/types/task";
import { getTaskData, getTaskIsLoading } from "../../model/selectors/taskSelectors";
import { fetchTasks } from "../../model/services/fetchTasks/fetchTasks";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { TaskListItem } from "../TaskListItem/TaskListItem";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { taskReducer } from "../../model/slice/taskSlice";
import { VStack } from "shared/ui/Stack";
import { TaskListItemSkeleton } from "../TaskListItemSkeleton/TaskListItemSkeleton";

const reducers: ReducersList = {
    task: taskReducer
}

export const TaskList = () => {
    const dispatch = useAppDispatch()
    const tasks = useSelector(getTaskData)
    const isLoading = useSelector(getTaskIsLoading)

    const skeleton = (
        <VStack max gap="16">
            {new Array(9)
                    .fill(0)
                    .map((item, index) => (
                        <TaskListItemSkeleton key={index} />
                    ))
            }
        </VStack>
    )
    
    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    const renderTask = (task: Task) => <TaskListItem task={task} key={task.id} />
    
    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack max gap="8">
                {isLoading && skeleton}
                {tasks?.map(renderTask)}
            </VStack>
        </DynamicModuleLoader>
  );
};