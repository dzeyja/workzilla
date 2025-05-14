import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { getUserAuthData } from "entities/User"
import { Task } from "entities/Task"
import { TaskValidationError } from "../../types/createTaskFormSchema"
import { getCreateTaskFormData } from "../../selectors/createTaslFormSelectors"
import { validateTask } from "../validateTask/validateTask"

export const createTask = createAsyncThunk<Task, void, ThunkConfig<TaskValidationError[]>>(
    'task/createTask',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { 
            getState, 
            rejectWithValue, 
            extra 
        } = thunkAPI
        
        const user = getUserAuthData(getState())
        const formData = getCreateTaskFormData(getState())

        const errors = validateTask(formData)

        if (errors.length) {
            return rejectWithValue(errors)
        }
        
        try {
            const response = await extra.api.post<Task>('/tasks', {
                ...formData,
                userId: user?.id
            })
            
            if (!response.data) {
                throw new Error()
            }

            alert('Вы успешно создали задачу')
            return response.data
        } catch(e) {
           return rejectWithValue([TaskValidationError.SERVER_ERROR]) 
        }
    },
)
  