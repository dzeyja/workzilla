"use client";

import { Text, TextTheme } from "shared/ui/Text/Text";
import { Task } from "../../model/types/task";
import Link from "next/link";
import { HStack, VStack } from "shared/ui/Stack";

interface TaskListItemProps {
    task: Task
}

export const TaskListItem = (props: TaskListItemProps) => {
    const { task } = props
    let priorityLvl = ''
    let status = ''

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
        <Link className="w-full" href={`/tasks/${task.id}`}>
            <div className='p-6 rounded-xl bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] duration-300 cursor-pointer transition-all mb-4' key={task.id}>
                <HStack justify="between" className="border-b pb-3">
                    <Text title={task.title} theme={TextTheme.PRIMARY} className="text-xl font-medium" />
                    <HStack gap="4" className="bg-gray-50 px-3 py-1 rounded-lg">
                        <Text smallText="Приоритет:" className="text-gray-600" />
                        <Text 
                            smallText={priorityLvl} 
                            className={`${
                                task.priority === 'high' ? 'text-red-600' : 
                                task.priority === 'medium' ? 'text-yellow-600' : 
                                'text-green-600'
                            } font-medium`} 
                        />
                    </HStack>
                </HStack>
                <Text className="mt-3 text-gray-600" smallText={task.description} theme={TextTheme.SECONdARY} />
                <HStack className="mt-4" justify="between" align="center">
                    <HStack className="bg-gray-50 px-3 py-1 rounded-lg">
                        <Text smallText="📅 Создано:" className="text-gray-600" />
                        <Text smallText={new Date(task.createdAt).toLocaleDateString('ru-RU')} className="font-medium"/>
                    </HStack>
                    <Text 
                        smallText={status} 
                        className={`${
                            task.status === 'pending' ? 'text-yellow-600' : 
                            task.status === 'in-progress' ? 'text-blue-600' : 
                            'text-green-600'
                        } font-medium bg-gray-50 px-3 py-1 rounded-lg`}
                    />
                </HStack>
            </div>      
        </Link>
    );
};