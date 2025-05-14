import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task, TaskTypes, TaskSchema, TaskSortField, TaskStatus, TaskPriority } from '../types/task'
import { fetchTasks } from '../services/fetchTasks/fetchTasks'
import { fetchTaskById } from '../services/fetchTaskById/fetchTaskById'
import { OrderType } from 'shared/types'

const initialState: TaskSchema = {
    isLoading: false,
    error: undefined,
    data: [],
    task: undefined,
    myTasks: [],
    search: '',
    types: TaskTypes.ALL,
    sort: TaskSortField.Title,
    status: TaskStatus.All,
    priority: 'not_selected',
    order: 'asc'
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        updateTaskInArray: (state, action: PayloadAction<Task>) => {
            const updatedTask = action.payload;
            state.task = action.payload
            state.data = state.data.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            );
        },
        setMyTasks: (state, action) => {
            state.myTasks?.push(action.payload)
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        setType: (state, action: PayloadAction<TaskTypes>) => {
            state.types = action.payload
        },
        setSort: (state, action: PayloadAction<TaskSortField>) => {
            state.sort = action.payload
        },
        setStatus: (state, action: PayloadAction<TaskStatus>) => {
            state.status = action.payload
        },
        setPriority: (state, action: PayloadAction<TaskPriority>) => {
            state.priority = action.payload
        },
        setOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.error = undefined
                state.data = []
                state.isLoading = true
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchTaskById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchTaskById.fulfilled, (state, action: PayloadAction<Task>) => {
                state.isLoading = false
                state.task = action.payload
            })
    },
})

export const { actions: taskActions} = taskSlice
export const { reducer: taskReducer } = taskSlice