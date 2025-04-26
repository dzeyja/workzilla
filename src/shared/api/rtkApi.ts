import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from 'shared/lib/const/localStorage'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers) => {
            const token = typeof window !== undefined 
                ? localStorage.getItem(USER_LOCALSTORAGE_KEY)
                : ''
                
            if (token) {
                headers.set('authorization', token)
            }
            return headers
        }   
    }),
    tagTypes: ['Responses', 'MyResponses'],
    endpoints: (build) => ({}),
})
