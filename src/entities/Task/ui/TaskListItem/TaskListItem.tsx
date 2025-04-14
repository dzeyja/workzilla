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
            <div className='p-6 rounded-md bg-gray mb-2 w-full hover:scale-101 hover:shadow-md duration-300 cursor-pointer' key={task.id}>
                <HStack justify="between">
                    <Text title={task.title} theme={TextTheme.PRIMARY} />
                    <HStack gap="4">
                        <Text smallText="Приоритет:" />
                        <Text smallText={priorityLvl} />
                    </HStack>
                </HStack>
                <Text className="mt-1" smallText={task.description} theme={TextTheme.SECONdARY} />
                <HStack className="mt-1" justify="between" align="center">
                    <HStack>
                        <Text smallText="Даты создания:" />
                        <Text smallText={new Date(task.createdAt).toLocaleDateString('ru-RU')}/>
                    </HStack>
                    <Text smallText={status} theme={TextTheme.SECONdARY}/>
                </HStack>
            </div>      
        </Link>
    );
};