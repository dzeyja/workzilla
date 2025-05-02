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
    const user = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const [sendResponse] = useSendVacancyResponse()

    const onChangeMessage = useCallback((value: string) => {
        setMessage(value)
    }, [message])

    const onChangeCVLink = useCallback((value: string) => {
        setCvLink(value)
    }, [cvLink])

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!user || !vacancy?.id) {
            return 
        }

        try {
            sendResponse({
                message,
                cvlink: cvLink,
                userId: user?.id,
                vacancyId: vacancy?.id,
                vacancyTitle: vacancy.title,
                status: 'pending',
                specialty: profileData?.specialty ?? Specialties.NULL,
                experience: profileData?.experience ?? ExperienceLevel.NULL,
            })
            setMessage('')
            setCvLink('')
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
                    <Input
                        className="w-md"
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
                    {/*@ts-ignore*/}
                    <Button type='submit' className="w-full" >
                        Откликнутся
                    </Button>
                </VStack>
            </form>
        </Modal>
    );
};