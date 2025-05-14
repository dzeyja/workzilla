"use client"

import { getTask, getTaskIsLoading } from "../../model/selectors/taskSelectors";
import { taskReducer } from "../../model/slice/taskSlice";
import { TakeTask, takeTaskReducer } from "features/TakeTask";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Loader } from "shared/ui/Loader/Loader";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { fetchTaskById } from "../../model/services/fetchTaskById/fetchTaskById";
import { getUserAuthData } from "entities/User";
import { Button } from "shared/ui/Button/Button";
import { TaskResponseForm, useGetMyTaskResponses } from "entities/TaskResponses";

const reducers: ReducersList = {
    task: taskReducer,
    takeTask: takeTaskReducer,
}

interface TaskDetailsProps {
    paramsId?: string
}

export const TaskDetails = ({ paramsId }: TaskDetailsProps) => {
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const task = useSelector(getTask)
    const user = useSelector(getUserAuthData)
    const { data: myTaskResponses } = useGetMyTaskResponses({ userId: user?.id! })
    const isLoading = useSelector(getTaskIsLoading)
    const isExecutor = user?.role === "executor"

    const hasResponded = myTaskResponses?.some(response => response.taskId === task?.id)
    const myResponse = myTaskResponses?.find(response => response.taskId === task?.id)

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
    
    const renderTaskProps = (props: string) => <Text smallText={props} key={props} theme={TextTheme.SECONdARY} className="ml-4" />

    return (
        <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
            <VStack max gap='8' className="bg-white p-8 rounded-2xl shadow-lg">
                {isLoading ? errorRender : (
                    <>
                        <HStack max justify="between" className="border-b pb-4">
                            <div className="space-y-2">
                                <Text title={task?.title} weight={TextWeight.MEDIUM} theme={TextTheme.PRIMARY} className="text-2xl" />
                                <Text smallText={task?.description} theme={TextTheme.SECONdARY} className="text-gray-600" />
                            </div>
                            <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                                <Text weight={TextWeight.MEDIUM} smallText={`⏱️ Расчетное время: ${task?.estimatedTime}`} /> 
                                <Text weight={TextWeight.MEDIUM} smallText={`📅 Создано: ${new Date(task?.createdAt || 'Нету').toLocaleDateString('ru-RU')}`} />
                                <Text weight={TextWeight.MEDIUM} smallText={`📊 Статус: ${task?.status}`} /> 
                            </div>
                        </HStack>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <Text theme={TextTheme.PRIMARY} weight={TextWeight.MEDIUM} text="📧 Контакты доступны только для исполнителя" className="text-blue-700"/>
                            {isExecutor && (
                                <Text className="ml-4 mt-2 text-blue-900" text={task?.email} />
                            )}
                        </div>
                        <div className="space-y-2">
                            <Text weight={TextWeight.MEDIUM} smallText="🎯 Требования к исполнителю" className="text-lg" />
                            <div className="ml-4 space-y-1">
                                {task?.requirements?.map(renderTaskProps)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Text weight={TextWeight.MEDIUM} smallText="💻 Стек технологий" className="text-lg" />
                            <div className="ml-4 space-y-1">
                                {task?.techStack?.map(renderTaskProps)}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Text weight={TextWeight.MEDIUM} smallText="🔧 Технические детали" className="text-lg" />
                            <div className="ml-4 space-y-1">
                                {task?.technicalDetails?.map(renderTaskProps)}
                            </div>
                        </div>
                        {isExecutor && (
                            hasResponded ? (
                                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                                    {myResponse?.status === 'accepted' && (
                                        <Text text="✅ Вы приглашены" theme={TextTheme.SUCCESS} className="font-medium" />
                                    )}
                                    {myResponse?.status === 'rejected' && (
                                        <Text text="❌ Вам отказали" theme={TextTheme.ERROR} className="font-medium" />
                                    )}
                                    {myResponse?.status === 'pending' && (
                                        <Text text="⏳ Ваш отклик на рассмотрении" theme={TextTheme.PRIMARY} className="font-medium" />
                                    )}
                                </div>
                            ) : (
                                <Button 
                                    onClick={() => setIsOpen(true)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
                                >
                                    Оставить отклик
                                </Button>
                            )
                        )}
                        <TaskResponseForm task={task} isOpen={isOpen} onClose={() => setIsOpen(false)} />
                    </>
                )}
            </VStack>
        </DynamicModuleLoader>
    );
};
