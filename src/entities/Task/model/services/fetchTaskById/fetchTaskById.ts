import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Task } from "../../types/task"

export const fetchTaskById = createAsyncThunk<Task, string, ThunkConfig<string>>(
    'task/fetchTaskById',
    //@ts-ignore
    async (taskId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI

        try {
            const response = await extra.api.get<Task>(`/tasks/${taskId}`)
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('Оштбка при получений задания') 
        }
    },
  )
  