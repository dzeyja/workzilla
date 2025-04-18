"use client";

import { Task, taskActions } from "entities/Task";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { takeTask } from "../model/services/takeTask/takeTask";
import { Text } from "shared/ui/Text/Text";

interface TakeTaskProps {
    task?: Task
}

export const TakeTask = (props: TakeTaskProps) => {
    const { task } = props
    const dispactch = useAppDispatch()

    const onClick = useCallback(() => {
        if(task?.id) {
            dispactch(takeTask(task.id))
            dispactch(taskActions.setMyTasks(task))
        }
        alert('Задача добавлена в мой задачи в профиле!')
    }, [dispactch, task?.id])

    return (
        <>
            {task?.user ? (
                <Text title={`Задание занято исполнителем ${task?.user.username}`} />
            ) : (
                <Button onClick={onClick}>
                    Взять задание
                </Button>
            )}
        </>
    );
};