"use client"

import { getUserAuthData } from "entities/User";
import { useGetMyVacancyResponses } from "../../api/vacancyResponsesApi";
import { VacancyResponseStatus } from "../../model/types/vacancyResponses";
import { SelectTypes, SelectTypesItem } from "features/SelectTypes";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";

export const MyVacancyResponsesList = () => {
    const user = useSelector(getUserAuthData)
    const [status, setStatus] = useState<VacancyResponseStatus>('all')
    
    const { data: myResponses, isLoading, error } = useGetMyVacancyResponses({ 
        userId: user?.id!, 
        status: status === 'all' ? undefined : status
    }, { 
        skip: !user?.id,
        refetchOnMountOrArgChange: true 
    });
    
    const onChangeStatus = useCallback((newStatus: VacancyResponseStatus) => {
        setStatus(newStatus)
    }, [])
    
    const vacancyResStatus = useMemo<SelectTypesItem<VacancyResponseStatus>[]>(() => [
        {
            content: 'Все',
            value: 'all'
        },
        {
            content: 'В рассмотрении',  
            value: 'pending'
        },
        {
            content: 'Принято',
            value: 'accepted'
        },
        {
            content: 'Отклонено',
            value: 'rejected'
        },
    ], [])

    if (isLoading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="bg-red-50 text-red-600 px-6 py-4 rounded-lg shadow-sm">
                    An error occurred while loading your responses
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <SelectTypes 
                items={vacancyResStatus}
                value={status}
                onChange={onChangeStatus}
            />

            {myResponses?.length === 0 && (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="text-gray-500 text-lg">У вас пока нет откликов на вакансии</div>
                    <p className="text-gray-400 mt-2">Найдите интересные вакансии и откликнитесь на них</p>
                </div>
            )}

            <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3">
                {myResponses?.map(response => (
                    <div 
                        key={response.id} 
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="p-6">
                            <div className={`text-sm font-medium rounded-full px-3 py-1 inline-block mb-4 ${
                                response.status === 'accepted' ? 'bg-green-100 text-green-700' :
                                response.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                'bg-yellow-100 text-yellow-700'
                            }`}>
                                {response.status === 'accepted' ? 'Принято' :
                                 response.status === 'rejected' ? 'Отклонено' : 
                                 'В рассмотрении'}
                            </div>

                            <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                                {response.vacancyTitle}
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-600 line-clamp-3">{response.message}</p>
                                
                                <div className="flex flex-col gap-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Желаемая зарплата:</span>
                                        <span className="font-medium text-gray-900">{response.salary}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Дата отклика:</span>
                                        <span className="font-medium text-gray-900">
                                            {new Date(response.createdAt).toLocaleDateString('ru-RU')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};