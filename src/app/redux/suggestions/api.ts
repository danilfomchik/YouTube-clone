import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {AUTOCOMPLETE_URL} from '@/app/services/constants';

export const suggestionApi = createApi({
    reducerPath: 'suggestionApi',
    // fails when I use process.env variable inside suggestionApi
    // api works only with EN queries
    baseQuery: fetchBaseQuery({baseUrl: `https://corsproxy.io/?${AUTOCOMPLETE_URL}`}),
    endpoints: builder => ({
        getSuggestions: builder.query<any, string>({
            query: queryString => `?client=chrome&ds=yt&q=${queryString}`,
        }),
    }),
});

export const {useGetSuggestionsQuery} = suggestionApi;
