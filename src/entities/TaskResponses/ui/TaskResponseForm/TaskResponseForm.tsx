"use client";

import { getUserAuthData } from "entities/User";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Modal } from "shared/ui/Modal/Modal";
import { VStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { Task } from "entities/Task";
import { getProfileData } from "entities/Profile";
import { Specialties } from "entities/Specialty";
import { ExperienceLevel } from "entities/ExperienceLevel";
import { TextArea } from "shared/ui/Textarea/Textarea";
import { useSendTaskResponse } from "../../api/taskResponseApi";

interface TaskResponseFormProps {
    task?: Task
    isOpen: boolean
    onClose: () => void
    onSuccess?: () => void
}

export const TaskResponseForm = (props: TaskResponseFormProps) => {
    const {
        task,
        isOpen,
        onClose,
        onSuccess
    } = props

    const [message, setMessage] = useState('')
    const [portfolio, setPortfolio] = useState('')
    const [estimatedTime, setEstimatedTime] = useState('')
    const [proposedPrice, setProposedPrice] = useState('')
    
    const user = useSelector(getUserAuthData)
    const profileData = useSelector(getProfileData)
    const [sendResponse] = useSendTaskResponse()

    const onChangeMessage = useCallback((value: string) => {
        setMessage(value)
    }, [message])

    const onChangePortfolio = useCallback((value: string) => {
        setPortfolio(value)
    }, [portfolio])

    const onChangeEstimatedTime = useCallback((value: string) => {
        setEstimatedTime(value)
    }, [estimatedTime])

    const onChangeProposedPrice = useCallback((value: string) => {
        setProposedPrice(value)
    }, [proposedPrice])


    const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!user || !task?.id) {
            return 
        }

        try {
            sendResponse({
                message,
                userId: user?.id,
                taskId: task?.id,
                taskTitle: task?.title,
                portfolio,
                proposedPrice,
                estimatedTime,
                status: 'pending',
                specialty: profileData?.specialty ?? Specialties.NULL,
                experience: profileData?.experience ?? ExperienceLevel.NULL,
            })
            setMessage('')
            setProposedPrice('')
            setEstimatedTime('')
            setPortfolio('')
            onSuccess?.()
            onClose()
            alert('Отклик на задачу отправлен')
        } catch (error) {
            console.log(error)
        }
    }, [message, user?.id, task?.id, portfolio, proposedPrice, estimatedTime])  

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={onSubmit} >
                <VStack gap="16" max>
                    <Text title="Отклик на задачу" />
                    <TextArea
                        className="w-md min-h-lg"
                        placeholder="Соправодительное письмо"
                        value={message}
                        onChange={onChangeMessage}
                        layout="Соправодительное письмо"
                    />
                    <Input 
                        className="w-md"
                        placeholder="Ссылка на портфолио"
                        value={portfolio}
                        onChange={onChangePortfolio}
                        layout="Ссылка на портфолио"
                    />
                    <Input 
                        className="w-md"
                        placeholder="Предпологогаемое время"
                        value={estimatedTime}
                        onChange={onChangeEstimatedTime}
                        layout="Предпологогаемое время"
                    />
                    <Input 
                        className="w-md"
                        placeholder="Предлагаемая цена"
                        value={proposedPrice}
                        onChange={onChangeProposedPrice}
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