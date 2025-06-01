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

    const hasResponded = responses?.some(response => response.user_id === user?.id)
    const myResponse = responses?.find(response => response.user_id === user?.id)
    const isEmployer = user?.role === "customer"

    const renderVacancyProps = (props: string) => (
        <Text smallText={props} key={props} theme={TextTheme.SECONdARY} className="ml-4"/>
    )

    return (
        <VStack max gap="16" className="p-6">
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="p-4 space-y-4">
                    <Text weight={TextWeight.MEDIUM} title="Контакты" theme={TextTheme.PRIMARY} className="text-xl" />
                    <div className="space-y-2">
                        <Text text={`📧 Email: ${vacancy?.contactEmail}`} className="text-gray-700" />
                        <Text text={`📱 Телефон: 8 705 357 47 81`} className="text-gray-700" />
                    </div>
                </div>
            </Modal>
            <VacancyResponseForm 
                vacancy={vacancy} 
                isOpen={isOpenVacRes} 
                onClose={() => setIsOpenVacRes(false)} 
                onSuccess={() => refetch()}
            />
            <div className="bg-white p-8 w-full rounded-2xl shadow-lg">
                <div className="flex justify-between items-center border-b pb-4">
                    <div className="space-y-2">
                        <Text title={vacancy?.title} theme={TextTheme.PRIMARY} className="text-2xl font-bold" />
                        <Text title={vacancy?.company} className="text-xl text-gray-600" />
                    </div>
                    <Text text={vacancy?.salary} weight={TextWeight.MEDIUM} className="text-xl text-blue-600"/>
                </div>
                <div className="flex gap-2 items-center mt-4">
                    <Image 
                        src='/icons/location-icon.png'
                        alt='location'
                        width={20}
                        height={20}
                    />
                    <Text text={vacancy?.location} className="text-gray-600" />
                </div>
                <Text smallText={vacancy?.description} theme={TextTheme.SECONdARY} className="mt-4 text-gray-700" />
                <div className="flex gap-3 items-center mt-6">
                    <Button 
                        onClick={() => setIsOpen(true)} 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                        Показать контакты
                    </Button>
                </div>
                <div className="mt-8 space-y-6">
                    <div>
                        <Text text="🎯 Обязанности сотрудника" weight={TextWeight.MEDIUM} className="text-lg mb-2"/>
                        <div className="ml-4 space-y-1">
                            {vacancy?.responsibilities?.map(renderVacancyProps)}
                        </div>
                    </div>
                    <div>
                        <Text text="📋 Требования к кандидату" weight={TextWeight.MEDIUM} className="text-lg mb-2"/>
                        <div className="ml-4 space-y-1">
                            {vacancy?.requirements?.map(renderVacancyProps)}
                        </div>
                    </div>
                    <HStack align="end" justify="between">
                        <VStack className="flex-1">
                            <Text text="💼 Условия работы" weight={TextWeight.MEDIUM} className="text-lg mb-2"/>
                            <div className="ml-4 space-y-1">
                                {vacancy?.conditions?.map(renderVacancyProps)}
                            </div>
                        </VStack>
                        {isEmployer ? (
                            <div className="bg-blue-50 px-4 py-2 rounded-lg">
                                <Text text="✨ Вы заказчик и вы не можете откликнуться на вакансию" theme={TextTheme.PRIMARY} className="font-medium" />
                            </div>
                        ) : hasResponded ? (
                            <div className="bg-gray-50 px-4 py-2 rounded-lg">
                                {myResponse?.status === 'accepted' && (
                                    <Text text="✅ Вы приглашены" theme={TextTheme.SUCCESS} className="font-medium" />
                                )}
                                {myResponse?.status === 'rejected' && (
                                    <Text text="❌ Вам отказали" theme={TextTheme.ERROR} className="font-medium" />
                                )}
                                {myResponse?.status === 'pending' && (
                                    <Text text="⏳ Ваш отклик на рассмотрении" theme={TextTheme.PRIMARY} className="font-medium" />
                                )}
                            </div>
                        ) : (
                            <Button 
                                onClick={() => setIsOpenVacRes(true)}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                            >
                                Откликнуться
                            </Button>
                        )}
                    </HStack>
                </div>
                <Text 
                    className="mt-8 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg" 
                    smallText="Сервис workKing.kz не несет ответственности за сотрудничество по данным вакансиям, т.к. они предполагают работу вне сервиса." 
                />
            </div>
        </VStack>
    );
};