"use client"

import { getTask, getTaskIsLoading } from "../../model/selectors/taskSelectors";
import { taskReducer } from "../../model/slice/taskSlice";
import { getUserAuthData } from "entities/User";
import { TakeTask, takeTaskReducer } from "features/TakeTask";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Loader } from "shared/ui/Loader/Loader";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { fetchTaskById } from "../../model/services/fetchTaskById/fetchTaskById";

const reducers: ReducersList = {
    task: taskReducer,
    takeTask: takeTaskReducer,
}

interface TaskDetailsProps {
    paramsId?: string
}

export const TaskDetails = ({ paramsId }: TaskDetailsProps) => {
    const dispatch = useAppDispatch()
    const task = useSelector(getTask)
    const user = useSelector(getUserAuthData)
    const isLoading = useSelector(getTaskIsLoading)
    const isExecutor = user?.role === 'executor'

    const errorRender = (
        <VStack justify="center" className="py-48" max align="center">
            <Loader />
        </VStack>
    )

    useEffect(() => {
        if (paramsId) {
            dispatch(fetchTaskById(String(paramsId)))
        }
    }, [dispatch])
    
    const renderTeskProps = (props: string) => <Text smallText={props} theme={TextTheme.SECONdARY} className="ml-4" />

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <VStack max gap='8' className="bg-gray p-8 rounded-xl">
                {isLoading ? errorRender : (
                    <>
                        <HStack max justify="between">
                            <div>
                                <Text title={task?.title} weight={TextWeight.MEDIUM} theme={TextTheme.PRIMARY} />
                                <Text smallText={task?.description} theme={TextTheme.SECONdARY} />
                            </div>
                            <div>
                                <Text weight={TextWeight.MEDIUM} smallText={`Расчетное время: ${task?.estimatedTime}`} /> 
                                <Text weight={TextWeight.MEDIUM} smallText={`Создано: ${new Date(task?.createdAt || 'Нету').toLocaleDateString('ru-RU')}`} />
                                <Text weight={TextWeight.MEDIUM} smallText={`Статус: ${task?.status}`} /> 
                            </div>
                        </HStack>
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
                    </>
                )}
            </VStack>
        </DynamicModuleLoader>
    );
};
