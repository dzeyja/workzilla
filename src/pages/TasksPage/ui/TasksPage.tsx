"use client"

import { TaskList, taskReducer } from "entities/Task";
import { useState } from "react";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Button } from "shared/ui/Button/Button";
import { Page } from "shared/ui/Page/Page";
import { Tabs } from "shared/ui/Tabs/Tabs";
import { Text } from "shared/ui/Text/Text";

const TasksPage = () => {
    const [filters, setFilters] = useState([
        { id: 1, name: "Только ожидающие" },
        { id: 2, name: "В процессе" },
        { id: 3, name: "Завершенные" }
    ]);

    return (
        <DynamicModuleLoader name='task' removeAfterUnmount={false} reducer={taskReducer}>
            <Page>
                <div className="">
                    <TaskList />
                </div>
            </Page>
        </DynamicModuleLoader>
    );
};

export default TasksPage