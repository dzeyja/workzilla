"use client";

import { useGetTaskResponses, useUpdateTaskResponseStatus } from "../../api/taskResponseApi";
import { Modal } from "shared/ui/Modal/Modal";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { Button } from "shared/ui/Button/Button";
import { TaskResponse, TaskResponseStatus } from "../../model/types/TaskResponses";

const getStatusText = (status: string) => {
    switch (status) {
        case 'accepted': return '✅ Принято';
        case 'rejected': return '❌ Отклонено';
        default: return '⏳ Ожидает';
    }
};

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'accepted': return 'bg-green-100 text-green-700';
        case 'rejected': return 'bg-red-100 text-red-700';
        default: return 'bg-yellow-100 text-yellow-700';
    }
};

interface TaskResponseModalProps {
    isOpen: boolean
    onClose: () => void
    taskId: string
}

export const TaskResponseModal = (props: TaskResponseModalProps) => {
    const { isOpen, onClose, taskId } = props
    const { data: responses, isLoading, error } = useGetTaskResponses(taskId)
    const [updateStatus] = useUpdateTaskResponseStatus()

    const handleStatusUpdate = async (responseId: string, newStatus: TaskResponseStatus) => {
        try {
            await updateStatus({ id: responseId, status: newStatus }).unwrap()
        } catch (error) {
            console.error('Failed to update status:', error)
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Text text={'Отклики на эту задачу'} theme={TextTheme.PRIMARY}/>
            <div className="max-h-[600px] overflow-y-auto bg-white rounded-xl shadow-lg">
            {responses?.length ? (
                responses.map(response => (
                    <div
                        key={response.id}   
                        className="p-6 border-b border-gray-100 bg-gray-100 transition-colors duration-200 space-y-6"
                    >
                        <div className="flex justify-between items-center">
                            <Text text={'User name'} className="text-lg font-medium text-gray-900" />
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(response.status!)}`}>
                                {getStatusText(response?.status!)}
                            </span>
                        </div>

                        <p className="text-gray-600">{response.message}</p>

                       

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
        </Modal>
    );
};