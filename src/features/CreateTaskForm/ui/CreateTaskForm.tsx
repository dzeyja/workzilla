'use client'

import { Task, TaskPriority, TaskStatus, TaskTypes } from "entities/Task"
import { useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Input } from "shared/ui/Input/Input"
import { Select, SelectOption } from "shared/ui/Select/Select"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { Button } from "shared/ui/Button/Button"
import { HStack, VStack } from "shared/ui/Stack"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { ArrayInputField } from "shared/ui/ArrayInputField/ArrayInputField"
import { TextArea } from "shared/ui/Textarea/Textarea"
import { createTaskReducer } from "../model/slices/createTaskSlice"
import { getCreateTaskFormData, getCreateTaskFormError } from "../model/selectors/createTaslFormSelectors"
import { createTaskActions } from "../model/slices/createTaskSlice"
import { createTask } from "../model/services/createTask/createTask"

const reducers: ReducersList = {
    createTaskForm: createTaskReducer
}

export const CreateTaskForm = () => {
    const dispatch = useAppDispatch()
    const error = useSelector(getCreateTaskFormError)
    const formData = useSelector(getCreateTaskFormData)
    
    const onClick = useCallback(() => {
        dispatch(createTask())
    }, [dispatch])

    const onChangeTitle = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ title: value || '' }))
    }, [dispatch])

    const onChangeDescription = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ description: value || '' }))
    }, [dispatch])

    const onChangeStatus = useCallback((value?: TaskStatus) => {
        dispatch(createTaskActions.setFormData({ status: value || TaskStatus.Pending }))
    }, [dispatch])

    const onChangePriority = useCallback((value?: TaskPriority) => {
        dispatch(createTaskActions.setFormData({ priority: value || 'not_selected' }))
    }, [dispatch])

    const onChangeDeadline = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ deadline: value || '' }))
    }, [dispatch])

    const onChangeCategory = useCallback((value?: TaskTypes) => {
        dispatch(createTaskActions.setFormData({ category: value || TaskTypes.ALL }))
    }, [dispatch])

    const onChangeRequirements = useCallback((value?: string[]) => {
        dispatch(createTaskActions.setFormData({ requirements: value || [] }))
    }, [dispatch])

    const onChangeExpectedResult = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ expectedResult: value || '' }))
    }, [dispatch])

    const onChangeTechnicalDetails = useCallback((value?: string[]) => {
        dispatch(createTaskActions.setFormData({ technicalDetails: value || [] }))
    }, [dispatch])

    const onChangeTechStack = useCallback((value?: string[]) => {
        dispatch(createTaskActions.setFormData({ techStack: value || [] }))
    }, [dispatch])

    const onChangeEstimatedTime = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ estimatedTime: value || '' }))
    }, [dispatch])

    const onChangeNotes = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ notes: value || '' }))
    }, [dispatch])

    const onChangeEmail = useCallback((value?: string) => {
        dispatch(createTaskActions.setFormData({ email: value || '' }))
    }, [dispatch])

    const statusOptions = useMemo<SelectOption<TaskStatus>[]>(() => [
        { value: TaskStatus.Pending, content: 'В ожидании' },
        { value: TaskStatus.InProgress, content: 'В работе' },
        { value: TaskStatus.Completed, content: 'Завершено' },
        { value: TaskStatus.Cancelled, content: 'Отменено' },
    ], [])

    const priorityOptions = useMemo<SelectOption<TaskPriority>[]>(() => [
        { value: 'low', content: 'Низкий' },
        { value: 'medium', content: 'Средний' },
        { value: 'high', content: 'Высокий' },
    ], [])

    const categoryOptions = useMemo<SelectOption<TaskTypes>[]>(() => [
        { value: TaskTypes.ALL, content: 'Все' },
        { value: TaskTypes.Development, content: 'Разработка' },
        { value: TaskTypes.Design, content: 'Дизайн' },
        { value: TaskTypes.Analytics, content: 'Аналитика' },
        { value: TaskTypes.Documentation, content: 'Документация' },
        { value: TaskTypes.Testing, content: 'Тестирование' },
    ], [])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Text titleBig="Создание задачи" className="mb-4" />
            <HStack align="center" justify="center" max className="w-2xl mx-auto">
                <VStack gap="16" max>
                    {error && (
                        error.map(err => (
                            <Text text={err} theme={TextTheme.ERROR} key={err} />
                        ))
                    )}
                    <Input 
                        className="w-2xl"
                        value={formData?.title}
                        placeholder="Введите название задачи"
                        layout="Название задачи"
                        onChange={onChangeTitle}
                    />
                    <TextArea 
                        className="w-2xl"
                        value={formData?.description}
                        placeholder="Введите описание задачи"
                        layout="Описание задачи"
                        onChange={onChangeDescription}
                    />
                    <HStack gap="32" max>
                        <Select<TaskStatus>
                            options={statusOptions}
                            value={formData?.status}
                            onChange={onChangeStatus}
                            label="Статус"
                        />
                        <Select<TaskPriority>
                            options={priorityOptions}
                            value={formData?.priority}
                            onChange={onChangePriority}
                            label="Приоритет"
                        />
                        <Select<TaskTypes>
                            options={categoryOptions}
                            value={formData?.category}
                            onChange={onChangeCategory}
                            label="Категория"
                        />
                    </HStack>
                    <Input 
                        className="w-2xl"
                        value={formData?.deadline}
                        placeholder="Введите дедлайн"
                        layout="Дедлайн"
                        type="datetime-local"
                        onChange={onChangeDeadline}
                    />
                    <TextArea 
                        className="w-2xl"
                        value={formData?.expectedResult}
                        placeholder="Введите ожидаемый результат"
                        layout="Ожидаемый результат"
                        onChange={onChangeExpectedResult}
                    />
                    <ArrayInputField 
                        placeholder="Добавьте требование"
                        className="w-2xl"
                        values={formData?.requirements}
                        label="Требования"
                        onChange={onChangeRequirements}
                    />
                    <ArrayInputField 
                        placeholder="Добавьте техническую деталь"
                        className="w-2xl"
                        values={formData?.technicalDetails}
                        label="Технические детали"
                        onChange={onChangeTechnicalDetails}
                    />
                    <ArrayInputField 
                        placeholder="Добавьте технологию"
                        className="w-2xl"
                        values={formData?.techStack}
                        label="Технологический стек"
                        onChange={onChangeTechStack}
                    />
                    <Input 
                        className="w-2xl"
                        value={formData?.estimatedTime}
                        placeholder="Введите оценочное время"
                        layout="Оценочное время"
                        onChange={onChangeEstimatedTime}
                    />
                    <TextArea 
                        className="w-2xl"
                        value={formData?.notes}
                        placeholder="Введите заметки"
                        layout="Заметки"
                        onChange={onChangeNotes}
                    />
                    <Input 
                        className="w-2xl"
                        value={formData?.email}
                        placeholder="Введите email"
                        layout="Email"
                        type="email"
                        onChange={onChangeEmail}
                    />
                    <Button onClick={onClick}>
                        Создать задачу
                    </Button>
                </VStack>
            </HStack>
        </DynamicModuleLoader>
    )
}