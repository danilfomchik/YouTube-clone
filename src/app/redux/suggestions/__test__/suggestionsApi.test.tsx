import {describe, it, expect, afterEach, vi} from 'vitest';
import {cleanup, renderHook, waitFor} from '@testing-library/react';

import {Wrapper} from '@/app/test-utils';
import {useGetSuggestionsQuery} from '../api';
import {errorMock, mock} from '@/app/mocks/handlers';

describe('useGetSuggestionsQuery', () => {
    const query = 'test';

    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
        vi.resetAllMocks();
    });

    it('should return mocked value from useGetSuggestionsQuery', async () => {
        const {result} = renderHook(() => useGetSuggestionsQuery(query), {
            wrapper: Wrapper,
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(mock);
        });
    });

    it('should return empty array from useGetSuggestionsQuery', async () => {
        const {result} = renderHook(() => useGetSuggestionsQuery(''), {
            wrapper: Wrapper,
        });

        await waitFor(() => {
            expect(result.current.data).toEqual(errorMock);
        });
    });
});
