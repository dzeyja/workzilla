import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Task, TaskTypes } from "../../types/task"
import { getTaskSearch, getTaskSort, getTaskTypes } from "../../selectors/taskSelectors"

export const fetchTasks = createAsyncThunk<Task[], void, ThunkConfig<string>>(
    'task/fetchTasks',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const search = getTaskSearch(getState())
        const category = getTaskTypes(getState())
        const sort = getTaskSort(getState())

        try {
            const response = await extra.api.get<Task[]>(`/tasks`, {
                params: {
                    _expand: 'user',
                    _sort: sort,
                    ...(search && { title_like: search }),
                    category: category === TaskTypes.ALL ? undefined : category,
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
  