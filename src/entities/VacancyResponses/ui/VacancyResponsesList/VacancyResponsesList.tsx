"use client";

import { useCallback } from "react";
import { useGetVacancyResponses, useUpdateVacancyResposeStatus } from "../../api/vacancyResponsesApi";
import Link from "next/link";
import { Button } from "shared/ui/Button/Button";
import { Loader } from "shared/ui/Loader/Loader";
import { Text } from "shared/ui/Text/Text";

interface VacancyResponsesListProps {
    vacancyId?: string
}

export const VacancyResponsesList = (props: VacancyResponsesListProps) => {
    const { vacancyId } = props;
    const { data: responses, isLoading, refetch } = useGetVacancyResponses(vacancyId || '');
    const [updateResponse] = useUpdateVacancyResposeStatus();

    
    const handleStatusUpdate = useCallback(async (id: string, status: "accepted" | "rejected") => {
        try {
            await updateResponse({ id, status });
            await refetch();
        } catch (error) {
            console.error('Failed to update response status:', error);
        }
    }, [refetch, updateResponse]);

    if (isLoading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center bg-white rounded-xl shadow-lg p-4">
                <Loader />
            </div>
        );
    }

    const getStatusStyles = (status: string) => {
        const styles = {
            accepted: 'bg-green-100 text-green-800',
            rejected: 'bg-red-100 text-red-800',
            pending: 'bg-yellow-100 text-yellow-800'
        };
        return styles[status as keyof typeof styles] || styles.pending;
    };

    const getStatusText = (status: string) => ({
        accepted: 'Принято',
        rejected: 'Отклонено',
        pending: 'В рассмотрении'
    }[status] || 'В рассмотрении');

    return (
        <div className="max-h-[600px] overflow-y-auto bg-white rounded-xl shadow-lg">
            {responses?.length ? (
                responses.map(response => (
                    <div
                        key={response.id}
                        className="p-6 border-b border-gray-100 bg-gray-100 transition-colors duration-200 space-y-6"
                    >
                        <div className="flex justify-between items-center">
                            <Text text={'User name'} className="text-lg font-medium text-gray-900" />
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(response.status)}`}>
                                {getStatusText(response.status)}
                            </span>
                        </div>

                        <p className="text-gray-600">{response.message}</p>

                        <div className="bg-gray-50 p-4 rounded-lg flex gap-4 items-center">
                            <span className="font-medium text-gray-700">Ссылка на резюме:</span>
                            <Link 
                                href={response.cvlink}
                                className="text-blue-600 hover:text-blue-800 underline transition-colors"
                            >
                                {response.cvlink}
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
                            <div className="space-y-2">
                                <h3 className="text-gray-700 font-medium">Специальность</h3>
                                <p className="text-gray-600">{response.specialty}</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-gray-700 font-medium">Опыт работы</h3>
                                <p className="text-gray-600">{response.experience}</p>
                            </div>
                        </div>

                        {response.status === 'pending' && (
                            <div className="flex gap-4">
                                <Button 
                                    onClick={() => handleStatusUpdate(response.id!, "accepted")}
                                    className="flex-1 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                                >
                                    Принять отклик
                                </Button>
                                <Button 
                                    onClick={() => handleStatusUpdate(response.id!, "rejected")}
                                    className="flex-1 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                                >
                                    Отклонить отклик
                                </Button>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="p-8 text-center">
                    <Text text="Нет откликов" className="text-gray-500 text-lg" />
                </div>
            )}
        </div>
    );
};
