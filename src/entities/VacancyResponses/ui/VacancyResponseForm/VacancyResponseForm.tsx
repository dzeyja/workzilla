"use client";

import { getUserAuthData } from "entities/User";
import { useSendVacancyResponse } from "../../api/vacancyResponsesApi";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Modal } from "shared/ui/Modal/Modal";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { Vacancy } from "entities/Vacancy";
import { getProfileData } from "entities/Profile";
import { Specialties } from "entities/Specialty";
import { ExperienceLevel } from "entities/ExperienceLevel";
import { TextArea } from "shared/ui/Textarea/Textarea";

interface VacancyResponseFormProps {
    vacancy?: Vacancy
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export const VacancyResponseForm = (props: VacancyResponseFormProps) => {
    const {
        vacancy,
        isOpen,
        onClose,
        onSuccess
    } = props

    const [message, setMessage] = useState('')
    const [cvLink, setCvLink] = useState('')
    const [salary, setSalary] = useState('')

    const user = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const [sendResponse] = useSendVacancyResponse()

    const onChangeMessage = useCallback((value: string) => {
        setMessage(value)
    }, [message])

    const onChangeCVLink = useCallback((value: string) => {
        setCvLink(value)
    }, [cvLink])

    const onChangeSalary = useCallback((value: string) => {
        setSalary(value)
    }, [salary])

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!user || !vacancy?.id) {
            return 
        }

        try {
            sendResponse({
                message,
                cvlink: cvLink,
                userId: user?.id || '',
                vacancyId: vacancy?.id || '',
                vacancyTitle: vacancy?.title || '',
                status: 'pending',
                specialty: profileData?.specialty ?? Specialties.NULL,
                experience: profileData?.experience ?? ExperienceLevel.NULL,
                createdAt: new Date().toISOString(),
                salary: salary || 'Не указано',
            })
            setMessage('')
            setCvLink('')
            setSalary('')
            onSuccess?.()
            onClose()
            alert('Отклик отправлен')
        } catch (error) {
            console.log(error)
        }
    }, [message, cvLink, user?.id, vacancy?.id])  

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={onSubmit} >
                <VStack gap="16" max>
                    <Text title="Отклик на вакансию" />
                    <TextArea
                        className="w-md min-h-lg"
                        placeholder="Соправодительное письмо"
                        value={message}
                        onChange={onChangeMessage}
                        layout="Соправодительное письмо"
                    />
                    <Input 
                        className="w-md"
                        placeholder="Ссылка на резюме"
                        value={cvLink}
                        onChange={onChangeCVLink}
                        layout="Ссылка на резюме"
                    />
                    <Input 
                        className="w-md"
                        placeholder="Ожидаемая запрлата"
                        value={salary}
                        onChange={onChangeSalary}
                        layout="Ожидаемая зарплата"
                    />
                    {/*@ts-ignore*/}
                    <Button type='submit' className="w-full" >
                        Откликнутся
                    </Button>
                </VStack>
            </form>
        </Modal>
    );
};