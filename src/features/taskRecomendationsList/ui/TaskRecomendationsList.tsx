"use client";

import { Vacancy } from "entities/Vacancy";
import Link from "next/link";
import { Card } from "shared/ui/Card/Card";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { useGetTaskRecomendationsList } from "../api/taskRecomendationsListApi";
import { Task } from "entities/Task";
import { Loader } from "shared/ui/Loader/Loader";

export const TaskRecomdationsList = () => {
    const { data: tasks, isLoading, error } = useGetTaskRecomendationsList(4)

    if (isLoading) {
        return (
            <HStack justify="center" align="center" role="div" className="w-[20%] h-full" >
                <Loader />
            </HStack>
        )
    }
    
    const renderTaskRecomendations = (task: Task) => (
        <Link target="_blank" className="w-full" href={`/tasks/${task.id}`} key={task.id} >
            <Card className="w-full cursor-pointer">
                <Text text={task.title} theme={TextTheme.PRIMARY} />
            </Card>
        </Link>
    )

    return (
        <VStack gap="8" role="div" className="w-[20%]" >
            <Text weight={TextWeight.MEDIUM} title="Рекомендаций" />
            {tasks?.map(renderTaskRecomendations)}
        </VStack>
    );
};