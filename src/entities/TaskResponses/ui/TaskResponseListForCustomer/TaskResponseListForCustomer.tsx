'use client'

import { useGetTaskResponses, useAcceptTaskResponse, useRejectTaskResponse } from "../../api/taskResponseApi"
import { Text } from "shared/ui/Text/Text"
import { Button } from "shared/ui/Button/Button"

interface TaskResponseListForCustomerProps {
    taskId: string
}

export const TaskResponseListForCustomer = ({ taskId }: TaskResponseListForCustomerProps) => {
    const { data: responses, isLoading, error } = useGetTaskResponses(taskId)
    const [acceptResponse] = useAcceptTaskResponse()
    const [rejectResponse] = useRejectTaskResponse()

    const handleAcceptResponse = async (responseId: string) => {
        try {
            await acceptResponse({ responseId, taskId }).unwrap()
        } catch (error) {
            console.error('Failed to accept response:', error)
        }
    }

    const handleRejectResponse = async (responseId: string) => {
        try {
            await rejectResponse({ responseId }).unwrap()
        } catch (error) {
            console.error('Failed to reject response:', error)
        }
    }

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
                    Произошла ошибка при загрузке откликов
                </div>
            </div>
        )
    }
    
    return (
        <div className="space-y-6">
            <Text titleBig='Отклики на задачу' className="text-2xl font-bold text-gray-900" />
            
            {responses?.length === 0 && (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="text-gray-500 text-lg">Пока нет откликов на эту задачу</div>
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {responses?.map(response => (
                    <div 
                        key={response.id} 
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`text-sm font-medium rounded-full px-3 py-1 ${
                                    response.status === 'accepted' ? 'bg-green-100 text-green-700' :
                                    response.status === 'rejected' ? 'bg-red-100 text-red-700' :
                                    'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {response.status || 'pending'}
                                </div>
                                {response.status === 'pending' && (
                                    <div className="flex gap-2">
                                        <Button
                                            onClick={() => handleAcceptResponse(response.id!)}
                                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm"
                                        >
                                            Принять
                                        </Button>
                                        <Button
                                            onClick={() => handleRejectResponse(response.id!)}
                                            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
                                        >
                                            Отклонить
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-600">{response.message}</p>
                                
                                <div className="flex flex-col gap-2 text-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Предложенная цена:</span>
                                        <span className="font-medium text-gray-900">{response.proposedPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Срок выполнения:</span>
                                        <span className="font-medium text-gray-900">{response.estimatedTime}</span>
                                    </div>
                                </div>

                                {response.portfolioLink && (
                                    <a 
                                        href={response.portfolioLink} 
                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Портфолио
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
} 