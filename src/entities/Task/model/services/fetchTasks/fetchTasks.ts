import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Task } from "../../types/task"

export const fetchTasks = createAsyncThunk<Task[], void, ThunkConfig<string>>(
    'task/fetchTasks',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        try {
            const response = await extra.api.get<Task[]>(`/tasks`, {
                params: {
                    _expand: 'user'
                }
            })
            
            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch(e) {
           rejectWithValue('Оштбка при получений заданий') 
        }
    },
  )
  