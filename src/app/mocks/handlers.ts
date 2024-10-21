import {http, HttpResponse} from 'msw';

export const query = 'test';
export const mock = [query, ['test1', 'test2', 'test3', 'test4', 'test5', 'test6'], [], [], {}];
export const errorMock = ['', [], [], [], {}];

export const handlers = [
    // fails when I use process.env variable inside suggestionApi
    http.get('https://corsproxy.io/', async ({request}) => {
        const url = new URL(request.url);

        const q = url.searchParams.get('q');

        if (q === query) {
            return HttpResponse.json(mock, {status: 200});
        }

        return HttpResponse.json(errorMock, {status: 200});
    }),
];
