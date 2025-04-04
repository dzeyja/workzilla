"use client";

import { Task } from "entities/Task/model/types/task";
import { getTaskData } from "../../model/selectors/taskSelectors";
import { fetchTasks } from "../../model/services/fetchTasks/fetchTasks";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { TaskListItem } from "../TaskListItem/TaskListItem";

export const TaskList = () => {
    const dispatch = useAppDispatch()
    const tasks = useSelector(getTaskData)
    
    useEffect(() => {
        dispatch(fetchTasks())
    }, [dispatch])

    const renderTask = (task: Task) => <TaskListItem task={task} key={task.id} />
    
    return (
        <div className="w-full">
            {tasks?.map(renderTask)}
        </div>
  );
};