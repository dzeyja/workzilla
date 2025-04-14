import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { userReducer } from 'entities/User';
import { StoreProvider, StateSchema } from 'app/Providers/StoreProvider';
import React from 'react';

const defaultAsyncReducers: ReducersList = {
    user: userReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: React.FC) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);