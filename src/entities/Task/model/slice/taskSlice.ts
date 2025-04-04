import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task, TaskSchema } from '../types/task'
import { fetchTasks } from '../services/fetchTasks/fetchTasks'
import { fetchTaskById } from '../services/fetchTaskById/fetchTaskById'
import { takeTask } from 'features/TakeTask'

const initialState: TaskSchema = {
    isLoading: false,
    error: undefined,
    data: [],
    task: undefined,
    myTasks: []
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
    }
  },
  extraReducers(builder) {
      builder
        .addCase(fetchTasks.pending, (state) => {
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