// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const suggestionApi = createApi({
    reducerPath: 'suggestionApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_SUGGESTIONS_URL}),
    endpoints: builder => ({
        getSuggestions: builder.query<any, string>({
            query: queryString => `&q=${queryString}`,
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetSuggestionsQuery} = suggestionApi;
