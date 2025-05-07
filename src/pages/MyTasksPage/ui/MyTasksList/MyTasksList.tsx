"use client";

import { Task } from "entities/Task";
import { getUserAuthData } from "entities/User";
import { useGetMyTasksByUserId } from "pages/MyTasksPage/api/getMyTasksApi";
import { useSelector } from "react-redux";
import { Loader } from "shared/ui/Loader/Loader";
import { Text } from "shared/ui/Text/Text";
import { MyTaskItem } from "../MyTaskItem/MyTaskItem";
import { VStack } from "shared/ui/Stack";
import { ViewMyCustomerTasks } from "features/ViewCustomerTasks";

export const MyTaskList = () => {
    const user = useSelector(getUserAuthData);
    const isCustomer = user?.role === 'customer'


    return (
        <>
            <Text titleBig={isCustomer ? 'Мои задачи' : 'Мои отклики на задачи'} className="mb-4" /> 
            {isCustomer ? <ViewMyCustomerTasks /> : null}
        </>
    );
};

