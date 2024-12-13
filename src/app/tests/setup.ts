import {cleanup} from '@testing-library/react';
import mockRouter from 'next-router-mock';
import {createDynamicRouteParser} from 'next-router-mock/dynamic-routes';
import '@testing-library/jest-dom/vitest';

import {server} from '@/app/tests/mocks/api/server';

// setup msw
beforeAll(() => {
    server.listen();
});
afterEach(() => {
    cleanup();

    server.resetHandlers();
    mockRouter.push('/');
});
afterAll(() => server.close());

// mock next/router
vi.mock('next/router', () => vi.importActual('next-router-mock'));

mockRouter.useParser(
    createDynamicRouteParser([
        // @see https://github.com/scottrippey/next-router-mock#dynamic-routes
    ]),
);

// mock next/navigation
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
