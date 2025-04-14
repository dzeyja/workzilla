"use client"

import { TaskList, taskReducer } from "entities/Task";
import { useState } from "react";
import { Page } from "shared/ui/Page/Page";

const TasksPage = () => {
    const [filters, setFilters] = useState([
        { id: 1, name: "Только ожидающие" },
        { id: 2, name: "В процессе" },
        { id: 3, name: "Завершенные" }
    ]);

    return (
        <Page>
            <TaskList />
        </Page>
    );
};

export default TasksPage