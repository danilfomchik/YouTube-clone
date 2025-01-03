import {http, HttpResponse} from 'msw';

export const searchQuery = 'test';
export const searchQueryMock = [searchQuery, ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']];
export const searchQueryEmptyMock = ['', []];

// fails when I use process.env variable inside suggestionApi
// suggestionApi mock handler
export const suggestionsHandler = http.get('https://corsproxy.io/', async ({request}) => {
    const url = new URL(request.url);

    const q = url.searchParams.get('q');

    if (q === searchQuery) {
        return HttpResponse.json(searchQueryMock, {status: 200});
    }

    return HttpResponse.json(searchQueryEmptyMock, {status: 200});
});
