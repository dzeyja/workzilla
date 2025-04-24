"use client"

import { TaskDetails } from "entities/Task";
import { useParams } from "next/navigation";
import { Page } from "shared/ui/Page/Page";


const TaskDetailsPage = () => {
    const params = useParams()

    return (
        <Page>
            <TaskDetails paramsId={String(params?.id)}/>
        </Page>
    );
};

export default TaskDetailsPage