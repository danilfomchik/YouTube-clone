import {afterAll, afterEach, beforeAll, vi} from 'vitest';

import {server} from './mocks/api/server';

vi.mock('next/navigation', () => {
    return {
        __esModule: true,
        usePathname: () => ({
            pathname: '',
        }),
        useRouter: () => ({
            push: vi.fn(),
            replace: vi.fn(),
            prefetch: vi.fn(),
        }),
        useSearchParams: () => ({
            get: () => {},
        }),
    };
});

beforeAll(() => {
    server.listen();
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => server.close());
