'use client'

import { useSelector } from "react-redux"
import { useGetMyCustomerTasksByStatus } from "../../api/getMyCustomerTasks"
import { getUserAuthData } from "entities/User"
import { Text } from "shared/ui/Text/Text"
import { VStack } from "shared/ui/Stack"
import { Loader } from "shared/ui/Loader/Loader"
import { getTaskStatus, getTaskStatusFilters, Task, taskActions, TaskStatus } from "entities/Task"
import { SelectTypes, SelectTypesItem } from "features/SelectTypes"
import { useCallback, useMemo } from "react"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { taskReducer } from "entities/Task"
import { ViewMyCustomerTasksItem } from "../ViewMyCustomerTaskItem/ViewMyCustomerTaskItem"

const reducers: ReducersList = {
    task: taskReducer
}

export const ViewMyCustomerTasks = () => {
    const user = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()
    const status = useSelector(getTaskStatus)
    const customerStatus = useSelector(getTaskStatusFilters)
    const { data: myTasksByStatus, isLoading: isLoadingByStatus, error: errorByStatus } = useGetMyCustomerTasksByStatus({
        userId: user?.id!, 
        status: status === TaskStatus.All ? undefined : status
    })

    const onChangeStatus = useCallback((status: TaskStatus) => {
        console.log('Changing status to:', status);
        dispatch(taskActions.setStatus(status))
    }, [dispatch])

    const statusTabs = useMemo<SelectTypesItem<TaskStatus>[]>(() => {
        return Object.values(customerStatus).map((status) => ({
            value: status.value as TaskStatus,
            content: status.label
        }))
    }, [customerStatus])

    if (errorByStatus) {
        return (
            <div className="flex justify-center items-center h-64">
                <Text title="Произошла ошибка при загрузке задач" className="text-red-600" />
            </div>
        )
    }

    if (isLoadingByStatus) {
        return (
            <div className="flex justify-center items-center h-64">
                <Loader />
            </div>
        )
    }

    const renderViewMyCustomerTaskItem = (task: Task) => <ViewMyCustomerTasksItem task={task} key={task.id} />

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack max gap="4" className="mt-4">
                <SelectTypes 
                    items={statusTabs} 
                    value={status || TaskStatus.All} 
                    onChange={onChangeStatus} 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    {myTasksByStatus?.length ? (
                        myTasksByStatus?.map(renderViewMyCustomerTaskItem)
                    ) : (
                        <Text title="Задачи не найдены" />
                    )}
                </div>
            </VStack>
        </DynamicModuleLoader>
    )
}