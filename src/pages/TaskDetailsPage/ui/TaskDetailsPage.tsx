"use client"

import { TaskDetails } from "entities/Task";
import { TaskRecomdationsList } from "features/taskRecomendationsList";
import { useParams } from "next/navigation";
import { Page } from "shared/ui/Page/Page";
import { HStack } from "shared/ui/Stack";


const TaskDetailsPage = () => {
    const params = useParams()

    return (
        <Page>
            <HStack gap="16" align="start">
                <TaskRecomdationsList />
                <TaskDetails paramsId={String(params?.id)}/>
            </HStack>
        </Page>
    );
};

export default TaskDetailsPage