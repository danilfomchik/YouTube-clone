import {describe, it, expect, afterEach, vi, beforeEach} from 'vitest';
import {cleanup, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import Router from 'next/router';
import {MemoryRouterProvider} from 'next-router-mock/MemoryRouterProvider';

import {renderWithProvider} from '@/app/test-utils';
import Navbar from '..';
import {pages} from '../constants';

describe('Navbar component', () => {
    const spies: any = {};

    beforeEach(() => {
        spies.routerChangeStart = vi.fn();
        Router.events.on('routeChangeStart', spies.routerChangeStart);
    });

    afterEach(() => {
        cleanup();
        vi.clearAllMocks();
        vi.resetAllMocks();

        Router.events.off('routeChangeStart', spies.routerChangeStart);
    });

    for (const page of pages) {
        it(`should render ${page.label} link in navbar`, async () => {
            const {getByRole} = renderWithProvider(<Navbar />);

            const link = getByRole('link', {
                name: page.label,
            });

            expect(link).toBeDefined();
        });

        it(`Link should have href that route to ${page.path}`, async () => {
            const {getByRole} = renderWithProvider(<Navbar />, {} as any, {wrapper: MemoryRouterProvider});

            const link = getByRole('link', {
                name: page.label,
            });

            await waitFor(() => {
                userEvent.click(link);
            });

            await waitFor(() => {
                expect(mockRouter.asPath).toEqual(page.path);
            });
        });
    }
});
