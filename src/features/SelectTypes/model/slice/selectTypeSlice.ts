import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SelectTypesSchema, VacancyTypes } from '../types/selecTypes'

const initialState: SelectTypesSchema = {
    type: VacancyTypes.ALL
}

const selectTypeSlice = createSlice({
  name: 'selectTypes',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<VacancyTypes>) => {
        state.type = action.payload
    },
  },
})

export const { actions: selectTypeActions} = selectTypeSlice
export const { reducer: selectTypeReducer } = selectTypeSlice