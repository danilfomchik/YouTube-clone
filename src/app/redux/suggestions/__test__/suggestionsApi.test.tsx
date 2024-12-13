import {renderHook, waitFor} from '@testing-library/react';

import {useGetSuggestionsQuery} from '../api';
import {searchQueryEmptyMock, searchQueryMock} from '@/app/tests/mocks/handlers';
import {WrapperWithInitialStore} from '@/app/tests/wrappers';

describe('useGetSuggestionsQuery', () => {
    it('should return mocked value from useGetSuggestionsQuery', async () => {
        const {result} = renderHook(() => useGetSuggestionsQuery('test'), {wrapper: WrapperWithInitialStore});

        await waitFor(() => {
            expect(result.current.data).toEqual(searchQueryMock);
        });
    });

    it('should return empty array from useGetSuggestionsQuery', async () => {
        const {result} = renderHook(() => useGetSuggestionsQuery(''), {wrapper: WrapperWithInitialStore});

        await waitFor(() => {
            expect(result.current.data).toEqual(searchQueryEmptyMock);
        });
    });
});
