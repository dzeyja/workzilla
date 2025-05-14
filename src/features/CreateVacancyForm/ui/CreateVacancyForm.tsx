'use client'

import { EmploymentType, VacancyTypes } from "entities/Vacancy"
import { useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"
import { Input } from "shared/ui/Input/Input"
import { Select, SelectOption } from "shared/ui/Select/Select"
import { Text, TextTheme } from "shared/ui/Text/Text"
import { getCreateVacancyError, getCreateVacancyFormData } from "../model/selectors/createVacancySelectors"
import { ExperienceLevel, SelectExperienceLvl } from "entities/ExperienceLevel"
import { createVacancyActions, createVacancyReducer } from "../model/slice/createVacancySlice"
import { Button } from "shared/ui/Button/Button"
import { HStack, VStack } from "shared/ui/Stack"
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader"
import { ArrayInputField } from "shared/ui/ArrayInputField/ArrayInputField"
import { TextArea } from "shared/ui/Textarea/Textarea"
import { createVacancy } from "../model/services/createVacancy/createVacancy"

const reducers: ReducersList = {
    createVacancy: createVacancyReducer
}

export const CreateVacancyForm = () => {
    const dispatch = useAppDispatch()
    const error = useSelector(getCreateVacancyError)
    const formData = useSelector(getCreateVacancyFormData)
    
    const onClick = useCallback(() => {
        dispatch(createVacancy())
    }, [dispatch])

    const onChangeTitle = useCallback((value?: string) => {
        dispatch(createVacancyActions.setFormData({ title: value || '' }))
    }, [dispatch])

    const onChangeDescription = useCallback((value?: string) => {
        dispatch(createVacancyActions.setFormData({ description: value || '' }))
    }, [dispatch])

    const onChangeCompanyName = useCallback((value?: string) => {
        dispatch(createVacancyActions.setFormData({ company: value || '' }))
    }, [dispatch])

    const onChangeLocation = useCallback((value?: string) => {
        dispatch(createVacancyActions.setFormData({ location: value || '' }))
    }, [dispatch])

    const onChangeEmployment = useCallback((value?: EmploymentType) => {
        dispatch(createVacancyActions.setFormData({ employmentType: value || "internship" }))
    }, [dispatch])

    const onChangeExperience = useCallback((value?: ExperienceLevel) => {
        dispatch(createVacancyActions.setFormData({ experienceLevel: value || ExperienceLevel.NULL }))
    }, [dispatch])

    const onChangeSalary = useCallback((value?: string) => {
        dispatch(createVacancyActions.setFormData({ salary: value || '' }))
    }, [dispatch])

    const onChangeContactEmail = useCallback((value?: string) => {
        dispatch(createVacancyActions.setFormData({ contactEmail: value || '' }))
    }, [dispatch])

    const onChangeResponsibilities = useCallback((value?: string[]) => {
        dispatch(createVacancyActions.setFormData({ responsibilities: value || [] }))
    }, [dispatch])

    const onChangeRequirements = useCallback((value?: string[]) => {
        dispatch(createVacancyActions.setFormData({ requirements: value || [] }))
    }, [dispatch])

    const onChangeConditions = useCallback((value?: string[]) => {
        dispatch(createVacancyActions.setFormData({ conditions: value || [] }))
    }, [dispatch])

    const onChangeSkills = useCallback((value?: string[]) => {
        dispatch(createVacancyActions.setFormData({ skills: value || [] }))
    }, [dispatch])

    const onChangeCategory = useCallback((value?: VacancyTypes) => {
        dispatch(createVacancyActions.setFormData({ category: value  || VacancyTypes.ALL }))
    }, [dispatch])

    const employmentOptions = useMemo<SelectOption<EmploymentType>[]>(() => [
        { value: 'full-time', content: 'Полная занятость' },
        { value: 'part-time', content: 'Частичная занятость' },
        { value: 'contract', content: 'Контракт' },
        { value: 'internship', content: 'Стажировка' },
    ], [])

    const typesOptions = useMemo<SelectOption<VacancyTypes>[]>(() => [
            {
                content: 'Все',
                value: VacancyTypes.ALL,
            },
            {
                content: 'Разработка',
                value: VacancyTypes.DEVELOPMENT
            },
            {
                content: 'Дизайн',
                value: VacancyTypes.DESIGN
            },
            {
                content: 'Аналитика',
                value: VacancyTypes.ANALYTICS
            },
            {
                content: 'Маркетинг',
                value: VacancyTypes.MARKETING
            },
    ], [])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Text titleBig="Форма для создания вакансии" className="mb-4" />
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
                        placeholder="Введите название вакансии"
                        layout="Название вакансии"
                        onChange={onChangeTitle}
                    />
                    <TextArea 
                        className="w-2xl"
                        value={formData?.description}
                        placeholder="Введите описание вакаснии"
                        layout="Описание вакансии"
                        onChange={onChangeDescription}
                    />
                    <Input 
                        className="w-2xl"
                        value={formData?.company}
                        placeholder="Введите название компаний"
                        layout="Название компании"
                        onChange={onChangeCompanyName}
                    />
                    <Input 
                        className="w-2xl"
                        value={formData?.location}
                        placeholder="Введите название локации"
                        layout="Название локации"
                        onChange={onChangeLocation}
                    />
                    <Input 
                        className="w-2xl"
                        value={formData?.contactEmail}
                        placeholder="Введите контактный email"
                        layout="Введите контактный email"
                        onChange={onChangeContactEmail}
                    />
                    <HStack gap="32" max>
                        <Select<EmploymentType>
                            options={employmentOptions}
                            value={formData?.employmentType}
                            onChange={onChangeEmployment}
                            label="Работа"
                        />
                        <SelectExperienceLvl 
                            value={formData?.experienceLevel}
                            onChange={onChangeExperience}
                            label="Уровень опыта"
                        />
                        <Select<VacancyTypes>
                            value={formData?.category ?? VacancyTypes.ALL}
                            onChange={onChangeCategory}
                            options={typesOptions}
                            label="Категория"
                        />
                    </HStack>
                    <Input 
                        className="w-2xl"
                        value={formData?.salary}
                        placeholder="Введите зарплату"
                        layout="Зарплата"
                        onChange={onChangeSalary}
                    />
                    <ArrayInputField 
                        placeholder="Напишите обязанность"
                        className="w-2xl"
                        values={formData?.responsibilities}
                        label="Обязанности"
                        onChange={onChangeResponsibilities}
                    />
                    <ArrayInputField 
                        placeholder="Напишите рекомендации"
                        className="w-2xl"
                        values={formData?.requirements}
                        label="Рекоендации"
                        onChange={onChangeRequirements}
                    />
                    <ArrayInputField 
                        placeholder="Напишите условия"
                        className="w-2xl"
                        values={formData?.conditions}
                        label="Условия"
                        onChange={onChangeConditions}
                    />
                    <ArrayInputField 
                        placeholder="Напишите технические навыки"
                        className="w-2xl"
                        values={formData?.skills}
                        label="Технические навыки"
                        onChange={onChangeSkills}
                    />
                    <Button onClick={onClick}>
                        Создать вакансию
                    </Button>
                </VStack>
            </HStack>
        </DynamicModuleLoader>
    )
}