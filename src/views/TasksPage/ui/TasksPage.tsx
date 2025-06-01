"use client"

import { TaskList } from "entities/Task";
import { Page } from "shared/ui/Page/Page";
import { TasksPageSearch } from "./TasksPageSearch/TasksPageSearch";
import { HStack, VStack } from "shared/ui/Stack";
import { TasksPageFilters } from "./TasksPageFilters/TasksPageFilters";

const TasksPage = () => {
    return (
        <Page>
            <HStack max align="start">
                <TasksPageFilters />
                <VStack max gap="16"> 
                    <TasksPageSearch />
                    <TaskList />
                </VStack>
            </HStack>
        </Page>
    );
};

export default TasksPage