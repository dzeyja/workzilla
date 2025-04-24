"use client";

import { getUserAuthData } from "entities/User";
import { useSendVacancyResponse } from "entities/VacancyResponses/api/vacancyResponsesApi";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Modal } from "shared/ui/Modal/Modal";
import { HStack, VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";

interface VacancyResponseFormProps {
    vacancyId?: string
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export const VacancyResponseForm = (props: VacancyResponseFormProps) => {
    const {
        vacancyId,
        isOpen,
        onClose,
        onSuccess
    } = props

    const [message, setMessage] = useState('')
    const [cvLink, setCvLink] = useState('')
    const user = useSelector(getUserAuthData)
    const [sendResponse] = useSendVacancyResponse()

    const onChangeMessage = useCallback((value: string) => {
        setMessage(value)
    }, [message])

    const onChangeCVLink = useCallback((value: string) => {
        setCvLink(value)
    }, [cvLink])

    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!user || !vacancyId) {
            return 
        }

        try {
            sendResponse({
                message,
                cvlink: cvLink,
                userId: user?.id,
                vacancyId,
                status: 'pending',
            })
            setMessage('')
            setCvLink('')
            onSuccess?.()
            onClose()
            alert('Отклик отправлен')
        } catch (error) {
            console.log(error)
        }
    }, [message, cvLink, user?.id, vacancyId])  

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={onSubmit} className="w-full">
                <VStack gap="16" max>
                    <Text title="Отклик на вакансию" />
                    <Input
                        className="w-full"
                        placeholder="Соправодительное письмо"
                        value={message}
                        onChange={onChangeMessage}
                        layout="Соправодительное письмо"
                    />
                    <Input 
                        className="w-full"
                        placeholder="Ссылка на резюме"
                        value={cvLink}
                        onChange={onChangeCVLink}
                        lang="Ссылка на резюме"
                    />
                    {/*@ts-ignore*/}
                    <Button type='submit' >
                        Откликнутся
                    </Button>
                </VStack>
            </form>
        </Modal>
    );
};