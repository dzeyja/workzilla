import { Task } from "entities/Task";
import Link from "next/link";
import { Text } from "shared/ui/Text/Text";

interface MyTaskItemProps {
    task: Task
}

export const MyTaskItem = ({ task }: MyTaskItemProps) => {
    return (
        <Link href={`/tasks/${task.id}`}>
            <div className="bg-white rounded-lg shadow-sm p-4 mb-4 border-l-4 hover:shadow-md transition cursor-pointer"
                style={{ borderLeftColor: 
                    task.priority === 'high' ? '#ef4444' : 
                    task.priority === 'medium' ? '#f97316' : '#10b981' 
                }}>
                            
                    <Text title={task.title} className='overflow-hidden text-ellipsis whitespace-nowrap' />
                    <span className="text-sm text-gray-500">{task.status === 'in-progress' ? 'В работе' : ''}</span>
                            
                    <p 
                        className="text-gray-600 mt-2 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
                        title={task.description}
                    >
                        {task.description}
                    </p>
                            
                    <div className="flex items-center mb-2">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            task.priority === 'high' ? 'bg-red-500' : 
                            task.priority === 'medium' ? 'bg-orange-500' : 'bg-green-500'
                        }`}></span>
                        <span className="text-sm">
                            {task.priority === 'high' ? 'Высокий приоритет' : 
                            task.priority === 'medium' ? 'Средний приоритет' : 'Низкий приоритет'}
                        </span>
                    </div>
                        
                    <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                        <span className="text-gray-500">Создана:</span>
                        <span className="ml-2">{new Date(task.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <span className="text-gray-500">Дедлайн:</span>
                        <span className={`ml-2 ${
                            task.deadline && new Date(task.deadline) < new Date() ? 'text-red-500' : ''
                            }`}>
                            {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'Нет'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};