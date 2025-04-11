"use client";

import emailjs from '@emailjs/browser'
import { Task, taskActions } from "entities/Task";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { takeTask } from "../model/services/takeTask/takeTask";
import { Text } from "shared/ui/Text/Text";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { takeTaskReducer } from "../model/slice/takeTask";
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface CompleteTaskProps {
    task?: Task
}

export const CompleteTask = (props: CompleteTaskProps) => {
    const { task } = props
    const user = useSelector(getUserAuthData)
    const dispactch = useAppDispatch()

    const onClick = useCallback(() => {
        if(task?.id) {
            dispactch(takeTask(task.id))
            dispactch(taskActions.setMyTasks(task))
        }
        alert('Задача добавлена в мой задачи в профиле!')
        if(task?.email && user?.username) {
            emailjs
                .send('service_mxtp6lf', 'template_24rl5f5', {
                    user_email: 'zharylkasynov_d@mail.ru', // email отправителя
                    customer_email: task.email,  // email заказчика
                    message: `Исполнитель ${user.username} взялся за задачу ${task?.title}`,               // сообщение
                }, 'zaI2ItLVjLDTkJm21')
                .then(
                () => {
                    console.log('Message sent successfully!', task.email);
                },
                (error) => {
                    console.log('Failed to send message...', error.text);
                }
            );
        }
    }, [dispactch, task?.id])

    return (
        <DynamicModuleLoader name='takeTask' reducer={takeTaskReducer}>
            {task?.assigneeId ? (
                <Text title="Задание занято" />
            ) : (
                <Button onClick={onClick}>
                    Взять задание
                </Button>
            )}
        </DynamicModuleLoader>
    );
};