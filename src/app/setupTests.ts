import {afterAll, afterEach, beforeAll, vi} from 'vitest';
import mockRouter from 'next-router-mock';
import {createDynamicRouteParser} from 'next-router-mock/dynamic-routes';

import {server} from './mocks/api/server';

beforeAll(() => {
    server.listen();
});
afterEach(() => {
    server.resetHandlers();
    mockRouter.push('/');
});
afterAll(() => server.close());

vi.mock('next/router', () => vi.importActual('next-router-mock'));

mockRouter.useParser(
    createDynamicRouteParser([
        // @see https://github.com/scottrippey/next-router-mock#dynamic-routes
    ]),
);

vi.mock('next/navigation', async () => {
    const {useRouter} = await require('next-router-mock');
    const usePathname = () => {
        const router = useRouter();
        return router.pathname;
    };

    const useSearchParams = () => {
        const router = useRouter();
        return new URLSearchParams(router.query);
    };

    return {
        useRouter,
        usePathname,
        useSearchParams,
    };
});
