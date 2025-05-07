import { StateSchema } from "app/Providers/StoreProvider";
import { TaskStatus } from "../types/task";

export const getTaskStatusFilters = (state: StateSchema) => {
    const role = state.user?.userData?.role

    if (role === 'customer') {
        return [
            { label: 'Все', value: 'all' },
            { label: 'В процессе', value: TaskStatus.InProgress },
            { label: 'Завершенные', value: TaskStatus.Completed },
            { label: 'Отмененные', value: TaskStatus.Cancelled }
        ];
    }

    if (role === 'executor') {
        return [
            { label: 'Все', value: 'all' },
            { label: 'В ожидании', value: TaskStatus.Pending },
            { label: 'Принятые', value: TaskStatus.Accepted },
            { label: 'Отклоненные', value: TaskStatus.Rejected }
        ];
    }

    return []; // fallback
};
