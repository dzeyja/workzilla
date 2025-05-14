'use client'

import { useGetMyTaskResponses } from "../../api/taskResponseApi"
import { getUserAuthData } from "entities/User"
import Link from "next/link"
import { useSelector } from "react-redux"
import { Text } from "shared/ui/Text/Text"

export const MyTaskResponseList = () => {
    const user = useSelector(getUserAuthData)
    const {data: myTaskResponses, isLoading, error} = useGetMyTaskResponses({ userId: user?.id! })
    
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
            <Text titleBig='Мои отклики на задачи' className="text-3xl font-bold mb-8 text-gray-900" />
            
            {myTaskResponses?.length === 0 && (
                <div className="bg-gray-50 rounded-xl p-8 text-center">
                    <div className="text-gray-500 text-lg">У вас пока нет откликов на задачи</div>
                    <p className="text-gray-400 mt-2">Найдите интересные задачи и откликнитесь на них</p>
                    <Link className="text-blue-500 hover:text-blue-600 mt-4 text-lg underline" href='/tasks'>Задачи</Link>
                </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myTaskResponses?.map(response => (
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
                                {response.status || 'pending'}
                            </div>

                            <h2 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                                {response.taskTitle}
                            </h2>

                            <div className="space-y-4">
                                <p className="text-gray-600 line-clamp-3">{response.message}</p>
                                
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
