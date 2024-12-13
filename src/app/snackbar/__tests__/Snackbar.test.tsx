import React from 'react';
import {act, render} from '@testing-library/react';
import {useSnackbar} from 'notistack';
import {it, describe, beforeEach, afterEach, expect, vi} from 'vitest';

import Snackbar from '../index';
import {hideMessage, removeMessage} from '@/app/redux/snackbar/snackbarSlice';
import {preloadedState} from '@/app/tests/constants';
import {setupStore} from '@/app/redux/store';
import {renderWithProviders} from '@/app/tests/utils';

vi.mock('notistack', () => ({
    useSnackbar: vi.fn(),
}));

describe('Snackbar component', () => {
    const store = setupStore({
        ...preloadedState,
        snackbar: [
            {id: 1, message: 'Test message 1', severity: 'success'},
            {id: 2, message: 'Test message 2', severity: 'error'},
        ],
    });

    const enqueueSnackbarMock = vi.fn();
    const closeSnackbarMock = vi.fn();

    beforeEach(() => {
        vi.mocked(useSnackbar).mockReturnValue({
            enqueueSnackbar: enqueueSnackbarMock,
            closeSnackbar: closeSnackbarMock,
        });

        store.dispatch = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders and enqueues snackbar messages', () => {
        renderWithProviders(<Snackbar />, {store});

        expect(enqueueSnackbarMock).toHaveBeenCalledWith(
            'Test message 1',
            expect.objectContaining({
                key: 1,
                variant: 'success',
            }),
        );
        expect(enqueueSnackbarMock).toHaveBeenCalledWith(
            'Test message 2',
            expect.objectContaining({
                key: 2,
                variant: 'error',
            }),
        );
    });

    it('hide message when snackbar is closed due to timeout', () => {
        renderWithProviders(<Snackbar />, {store});

        const onClose = enqueueSnackbarMock.mock.calls[0][1].onClose;
        act(() => {
            onClose(null, 'timeout', 1);
        });

        expect(store.dispatch).toHaveBeenCalledWith(hideMessage({id: 1}));
    });

    it('remove message when snackbar is exited', () => {
        renderWithProviders(<Snackbar />, {store});

        const onExited = enqueueSnackbarMock.mock.calls[0][1].onExited;
        act(() => {
            onExited(null, 1);
        });

        expect(store.dispatch).toHaveBeenCalledWith(removeMessage(1));
    });

    it('closes snackbar when action button is clicked', () => {
        renderWithProviders(<Snackbar />, {store});

        const action = enqueueSnackbarMock.mock.calls[0][1].action;
        const {getByRole} = render(action());
        const button = getByRole('button');

        button.click();

        expect(closeSnackbarMock).toHaveBeenCalledWith(1);
    });
});
