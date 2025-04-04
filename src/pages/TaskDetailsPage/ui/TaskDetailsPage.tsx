"use client"

import { fetchTaskById, getTask, getTaskIsLoading, taskReducer } from "entities/Task";
import { getUserAuthData } from "entities/User";
import { TakeTask } from "features/TakeTask";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { Page } from "shared/ui/Page/Page";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";

const TaskDetailsPage = () => {
    const params = useParams()
    const dispatch = useAppDispatch()
    const task = useSelector(getTask)
    const user = useSelector(getUserAuthData)
    const isLoading = useSelector(getTaskIsLoading)

    const isTaken = task?.assigneeId
    const isExecutor = user?.role === 'executor'

    useEffect(() => {
        if (params?.id) {
            dispatch(fetchTaskById(String(params.id)))
        }
    }, [dispatch])
    
    const renderTeskProps = (props: string) => <Text smallText={props} theme={TextTheme.SECONdARY} className="ml-4" />

    return (
        <DynamicModuleLoader name='task' removeAfterUnmount={false} reducer={taskReducer}>
            <Page>
                <div className="">
                    <div className="bg-gray p-8 rounded-xl w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                            <div>
                                <Text title={task?.title} weight={TextWeight.MEDIUM} theme={TextTheme.PRIMARY} />
                                <Text smallText={task?.description} theme={TextTheme.SECONdARY} />
                            </div>
                            <div>
                                <Text weight={TextWeight.MEDIUM} smallText={`Расчетное время: ${task?.estimatedTime}`} /> 
                                <Text weight={TextWeight.MEDIUM} smallText={`Создано: ${new Date(task?.createdAt || 'Нету').toLocaleDateString('ru-RU')}`} />
                                <Text weight={TextWeight.MEDIUM} smallText={`Статус: ${task?.status}`} /> 
                            </div>
                        </div>
                        <div>
                            <Text theme={TextTheme.PRIMARY} weight={TextWeight.MEDIUM} text="Контакты доступны только для исполнителя"/>
                            {isExecutor && (
                                <Text className="ml-4" text={task?.email} />
                            )}
                        </div>
                        <div>
                            <Text weight={TextWeight.MEDIUM} smallText="Требования к исполнителю" />
                            {task?.requirements?.map(renderTeskProps)}
                        </div>
                        <div>
                            <Text weight={TextWeight.MEDIUM} smallText="Стек технологий" />
                            {task?.techStack?.map(renderTeskProps)}
                        </div>
                        <div>
                            <Text weight={TextWeight.MEDIUM} smallText="Технические детали" />
                            {task?.technicalDetails?.map(renderTeskProps)}
                        </div>
                        <TakeTask task={task} />
                    </div>
                </div>
            </Page>
        </DynamicModuleLoader>
    );
};

export default TaskDetailsPage