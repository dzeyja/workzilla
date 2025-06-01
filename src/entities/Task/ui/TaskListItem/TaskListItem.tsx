"use client";

import { Text, TextTheme } from "shared/ui/Text/Text";
import { Task, TaskStatus } from "../../model/types/task";
import Link from "next/link";
import { HStack, VStack } from "shared/ui/Stack";
import { useGetMyTaskResponses } from "entities/TaskResponses";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { Button } from "shared/ui/Button/Button";

interface TaskListItemProps {
    task: Task
}

export const TaskListItem = (props: TaskListItemProps) => {
    const { task } = props
    const user = useSelector(getUserAuthData)
    const { data: myTaskResponses } = useGetMyTaskResponses({ userId: user?.id! })
    let priorityLvl = ''
    let status = ''

    const hasResponded = myTaskResponses?.some(response => response.taskId === task.id)
    const myResponse = myTaskResponses?.find(response => response.taskId === task?.id)

    switch(task.status) {
        case 'pending':
            status = 'ожидает'
            break;
        case 'in-progress': 
            status = 'в процессе'
            break
        case 'completed': 
            status = 'сделано'
            break
        default:
            status = 'неизветсный'
            break;
    }

    switch(task.priority) {
        case 'high':
            priorityLvl = 'высокий'
            break;
        case 'medium': 
            priorityLvl = 'средний'
            break
        case 'low': 
            priorityLvl = 'низкий'
            break
        default:
            priorityLvl = 'неизветсный'
            break;
    }

    return (
        <Link className="w-full group" href={`/tasks/${task.id}`}>
            <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-lg border border-gray-100/30
                          transition-all duration-500 ease-in-out
                          hover:shadow-2xl hover:scale-[1.02] hover:border-blue-200/40
                          group-hover:bg-gradient-to-br from-white via-white to-blue-50/90
                          mb-4" 
                 key={task.id}>
                <HStack justify="between" className="border-b border-gray-100/50 pb-4">
                    <Text title={task.title} theme={TextTheme.PRIMARY} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700" />
                    <HStack gap="4" className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-sm">
                        <Text smallText="Приоритет:" className="text-gray-500" />
                        <Text 
                            smallText={priorityLvl} 
                            className={`font-semibold ${
                                task.priority === 'high' ? 'text-rose-600 bg-rose-50/50 px-2 py-0.5 rounded-lg' : 
                                task.priority === 'medium' ? 'text-amber-600 bg-amber-50/50 px-2 py-0.5 rounded-lg' : 
                                'text-emerald-600 bg-emerald-50/50 px-2 py-0.5 rounded-lg'
                            }`} 
                        />
                    </HStack>
                </HStack>
                <Text className="mt-2 text-gray-600 line-clamp-2 leading-relaxed" smallText={task.description} theme={TextTheme.SECONdARY} />
                <HStack className="mt-8" justify="between" align="center">
                    <HStack className="bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-sm">
                        <Text smallText="📅 Создано:" className="text-gray-500" />
                        <Text smallText={new Date(task?.createdAt || '').toLocaleDateString('ru-RU')} className="font-semibold text-gray-800"/>
                    </HStack>
                    <Text 
                        smallText={status} 
                        className={`font-semibold px-5 py-2.5 rounded-2xl shadow-sm ${
                            task.status === 'pending' ? 'bg-gradient-to-r from-amber-50 to-amber-100/80 text-amber-700' : 
                            task.status === 'in-progress' ? 'bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-700' : 
                            'bg-gradient-to-r from-emerald-50 to-emerald-100/80 text-emerald-700'
                        }`}
                    />
                </HStack>
                {hasResponded ? (
                    <div className="mt-2 bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-xl px-6 py-4 rounded-2xl shadow-sm">
                        {myResponse?.status === TaskStatus.Accepted && (
                             <Text text="✅ Вы приглашены" theme={TextTheme.SUCCESS} className="font-semibold text-emerald-700" />
                        )}
                        {myResponse?.status === TaskStatus.Rejected && (
                            <Text text="❌ Вам отказали" theme={TextTheme.ERROR} className="font-semibold text-rose-700" />
                        )}
                        {myResponse?.status === TaskStatus.Pending && (
                            <Text text="⏳ Ваш отклик на рассмотрении" theme={TextTheme.PRIMARY} className="font-semibold text-blue-700" />
                        )}
                    </div>
                ) : (
                    <Button 
                        onClick={() => ''}
                        className="w-full mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 
                                 text-white font-semibold py-4 rounded-2xl transition-all duration-500 
                                 shadow-lg hover:shadow-blue-200/50 hover:shadow-2xl transform hover:-translate-y-1"
                    >
                        Оставить отклик
                    </Button>
                )}
            </div>      
        </Link>
    );
};