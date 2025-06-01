import { Text } from "shared/ui/Text/Text"
import { Task } from "entities/Task"
import { Button } from "shared/ui/Button/Button"
import { useState } from "react"
import { TaskResponseModal } from "entities/TaskResponses"

interface ViewMyCustomerTaskItemProps {
    task: Task
}

export const ViewMyCustomerTasksItem = ({ task }: ViewMyCustomerTaskItemProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div 
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
        >
                <Text text={task.title} className="text-lg font-medium mb-2" />
                <Text 
                    smallText={task.description} 
                    className="text-gray-600 line-clamp-2"
                />
                <div className="mt-4 flex justify-between items-center">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        task.status === 'completed' ? 'bg-green-100 text-green-700' :
                        task.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                    }`}>
                        {task.status === 'completed' ? '✅ Завершено' :
                        task.status === 'in-progress' ? '🔄 В процессе' :
                        '⏳ Ожидает'}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        task.priority === 'high' ? 'bg-red-100 text-red-700' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                    }`}>
                        {task.priority === 'high' ? '🔴 Высокий' :
                        task.priority === 'medium' ? '🟡 Средний' :
                        '🟢 Низкий'}
                    </div>
                </div>
                <Button
                    className="mt-4"
                    onClick={() => setIsOpen(true)}
                >
                    Посмотреть отклики
                </Button>
                <TaskResponseModal taskId={task?.id || ''} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}