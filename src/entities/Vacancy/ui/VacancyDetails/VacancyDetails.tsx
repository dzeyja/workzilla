"use client";

import { useGetVacancyResponses, VacancyResponseForm } from "entities/VacancyResponses";
import { useGetVacancyDetails } from "../../api/getVacancyDetails";
import Image from "next/image";
import { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Modal } from "shared/ui/Modal/Modal";
import { HStack, VStack } from "shared/ui/Stack";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";

interface VacancyDetailsProps {
    paramsId?: string
}

export const VacancyDetails = (props: VacancyDetailsProps) => {
    const user = useSelector(getUserAuthData)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenVacRes, setIsOpenVacRes] = useState(false)
    const { paramsId } = props
    
    if (!paramsId) {
        return <Text title="Не найдено вакансия"/>
    }
    
    const { data: vacancy } = useGetVacancyDetails(paramsId)
    const { data: responses, refetch } = useGetVacancyResponses(paramsId)

    const hasResponded = responses?.some(response => response.userId === user?.id)
    const myResponse = responses?.find(response => response.userId === user?.id)

    const renderVacancyProps = (props: string) => (
        <Text smallText={props} key={props} theme={TextTheme.SECONdARY} className="ml-4"/>
    )

    return (
        <VStack max gap="16">
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Text weight={TextWeight.MEDIUM} title="Контакты" theme={TextTheme.PRIMARY} />
                <Text text={`Email: ${vacancy?.contactEmail}`} />
                <Text text={`Телефон: 8 705 357 47 81`} />
            </Modal>
            <VacancyResponseForm 
                vacancy={vacancy} 
                isOpen={isOpenVacRes} 
                onClose={() => setIsOpenVacRes(false)} 
                onSuccess={() => refetch()}
            />
            <div className="bg-gray p-8 w-full rounded-lg">
                <div className="flex justify-between items-center">
                    <Text title={vacancy?.title} theme={TextTheme.PRIMARY} />
                    <Text title={vacancy?.company} />
                </div>
                <Text text={vacancy?.salary} weight={TextWeight.MEDIUM} className="mt-1"/>
                <div className="flex gap-1 items-center">
                    <Image 
                        src='/icons/location-icon.png'
                        alt='location'
                        width={20}
                        height={20}
                    />
                    <Text text={vacancy?.location} />
                </div>
                <Text smallText={vacancy?.description} theme={TextTheme.SECONdARY} />
                <div className="flex gap-3 items-center">
                    <Button onClick={() => setIsOpen(true)} className="mt-4">
                        Показать контакты
                    </Button>
                </div>
                <Text text="Обязанности сотрудника" weight={TextWeight.MEDIUM} className="mt-4"/>
                {vacancy?.responsibilities.map(renderVacancyProps)}
                <Text text="Требования к кандидату" weight={TextWeight.MEDIUM} className="mt-4"/>
                {vacancy?.requirements.map(renderVacancyProps)}
                <HStack align="end" justify="between">
                    <VStack>
                        <Text text="Условия работы" weight={TextWeight.MEDIUM} className="mt-4"/>
                        {vacancy?.conditions.map(renderVacancyProps)}
                    </VStack>
                    {hasResponded ? (
                        <>  
                            {myResponse?.status === 'accepted' && (
                                <Text text="Вы приглашены" theme={TextTheme.SUCCESS} />
                            )}
                            {myResponse?.status === 'rejected' && (
                                <Text text="Вам отказали" theme={TextTheme.ERROR} />
                            )}
                            {myResponse?.status === 'pending' && (
                                <Text text="Ваш отклик на рассмотрении" theme={TextTheme.PRIMARY} />
                            )}
                        </>
                    ) : (
                        <Button onClick={() => setIsOpenVacRes(true)}>
                            Откликнутся
                        </Button>
                    )}
                </HStack>
                <Text className="mt-6" smallText="Сервис workKing.kz не несет ответственности за сотрудничество по данным вакансиям, т.к. они предполагают работу вне сервиса." />
            </div>
        </VStack>
    );
};