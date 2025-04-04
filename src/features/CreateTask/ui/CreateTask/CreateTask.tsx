"use client";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
// import { createTask } from "../model/services/createTask";
import { Task, TaskPriority, TaskStatus } from "entities/Task";
import React, { useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

export const CreateTaskForm = () => {
    const dispatch = useAppDispatch();

    const [taskData, setTaskData] = useState<Partial<Task>>({
        title: '',
        description: '',
        email: '',
        status: 'pending',
        priority: 'medium',
        deadline: '',
        category: '',
        requirements: [],
        expectedResult: '',
        technicalDetails: [],
        techStack: [],
        estimatedTime: '',
        notes: ''
    });

    const onChange = (key: keyof Task, value: any) => {
        setTaskData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = () => {
        if (taskData.title && taskData.description) {
            // dispatch(createTask(taskData as Task));
            alert("Задача отправлена");
        } else {
            alert("Заполните обязательные поля: название и описание");
        }
    };

    return (
        <div className="p-4 flex flex-col gap-4 max-w-xl mx-auto">
            <Input placeholder="Название" value={taskData.title} onChange={(e) => onChange('title', e.target.value)} />
            <Input placeholder="Описание" value={taskData.description} onChange={(e) => onChange('description', e.target.value)} />
            <Input placeholder="Email заказчика" value={taskData.email} onChange={(e) => onChange('email', e.target.value)} />
            <Input placeholder="Категория" value={taskData.category} onChange={(e) => onChange('category', e.target.value)} />
            <Input placeholder="Дедлайн" value={taskData.deadline} onChange={(e) => onChange('deadline', e.target.value)} />
            <Input placeholder="Ожидаемый результат" value={taskData.expectedResult} onChange={(e) => onChange('expectedResult', e.target.value)} />
            <Input placeholder="Технические детали (через запятую)" value={taskData.technicalDetails?.join(', ')} onChange={(e) => onChange('technicalDetails', e.target.value.split(',').map(s => s.trim()))} />
            <Input placeholder="Технологии (через запятую)" value={taskData.techStack?.join(', ')} onChange={(e) => onChange('techStack', e.target.value.split(',').map(s => s.trim()))} />
            <Input placeholder="Оценочное время" value={taskData.estimatedTime} onChange={(e) => onChange('estimatedTime', e.target.value)} />
            <Input placeholder="Дополнительные примечания" value={taskData.notes} onChange={(e) => onChange('notes', e.target.value)} />
            <Input placeholder="Требования (через запятую)" value={taskData.requirements?.join(', ')} onChange={(e) => onChange('requirements', e.target.value.split(',').map(s => s.trim()))} />
            <select value={taskData.priority} onChange={(e) => onChange('priority', e.target.value as TaskPriority)} className="p-2 rounded border">
                <option value="low">Низкий приоритет</option>
                <option value="medium">Средний приоритет</option>
                <option value="high">Высокий приоритет</option>
            </select>
            <Button onClick={handleSubmit}>Создать задачу</Button>
        </div>
    );
};