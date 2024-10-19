import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const suggestionApi = createApi({
    reducerPath: 'suggestionApi',
    // fails when I use process.env variable inside suggestionApi
    baseQuery: fetchBaseQuery({baseUrl: `https://corsproxy.io/?${process.env.NEXT_PUBLIC_AUTOCOMPLETE_URL}`}),
    endpoints: builder => ({
        getSuggestions: builder.query<any, string>({
            query: queryString => `?client=chrome&ds=yt&q=${queryString}`,
        }),
    }),
});

export const {useGetSuggestionsQuery} = suggestionApi;
