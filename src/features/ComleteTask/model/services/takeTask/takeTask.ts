import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Task, taskActions } from "entities/Task"
import { getUserAuthData } from "entities/User"

export const takeTask = createAsyncThunk<Task, string, ThunkConfig<string>>(
    'task/takeTask',
    //@ts-ignore
    async (taskId, thunkAPI) => {
        const { getState, rejectWithValue, extra, dispatch } = thunkAPI
        
        const user = getUserAuthData(getState())

        try {
            const response = await extra.api.patch<Task>(`/tasks/${taskId}`, {
                assigneeId: user?.id,
                status: 'in-progress'
            })
            
            if (!response.data) {
                throw new Error()
            }

            if (user?.id) {
                dispatch(taskActions.updateTaskInArray(response.data))
            }
            return response.data
        } catch(e) {
           rejectWithValue('error') 
        }
    },
  )
  