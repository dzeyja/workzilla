import { AnyAction, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema"

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers }
  
    let combinedReducer = combineReducers(reducers)
  
    let keysToRemove: Array<StateSchemaKey> = []
  
    return {
      getReducerMap: () => reducers,
      //@ts-ignore
      reduce: (state: StateSchema, action: AnyAction) => {
        if (keysToRemove.length > 0) {
          state = { ...state }
          for (let key of keysToRemove) {
            delete state[key]
          }
          keysToRemove = []
        }
      //@ts-ignore
        return combinedReducer(state, action)
      },
      add: (key: StateSchemaKey, reducer: Reducer) => {
        if (!key || reducers[key]) {
          return
        }
        reducers[key] = reducer
  
        combinedReducer = combineReducers(reducers)
      },
      remove: (key: StateSchemaKey) => {
        if (!key || !reducers[key]) {
          return
        }
        delete reducers[key]
        keysToRemove.push(key)
  
        combinedReducer = combineReducers(reducers)
      }
    }
  }