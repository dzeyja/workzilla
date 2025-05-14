import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/Providers/StoreProvider"
import { Task, TaskTypes } from "../../types/task"
import { getTaskOrder, getTaskPriority, getTaskSearch, getTaskSort, getTaskTypes } from "../../selectors/taskSelectors"

export const fetchTasks = createAsyncThunk<Task[], void, ThunkConfig<string>>(
    'task/fetchTasks',
    //@ts-ignore
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI

        const search = getTaskSearch(getState())
        const category = getTaskTypes(getState())
        const sort = getTaskSort(getState())
        const priority = getTaskPriority(getState())
        const order = getTaskOrder(getState())

        try {
            const response = await extra.api.get<Task[]>(`/tasks`, {
                params: {
                    _expand: 'user',
                    _sort: sort,
                    _order: order,
                    ...(search && { title_like: search }),
                    category: category === TaskTypes.ALL ? undefined : category,
                    priority: priority === 'not_selected' ? undefined : priority,
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
  