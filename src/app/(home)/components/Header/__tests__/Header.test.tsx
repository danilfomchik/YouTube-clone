import {describe, it, expect, afterEach} from 'vitest';
import {cleanup, within} from '@testing-library/react';

import {authPreloadedState, renderWithProvider} from '@/app/test-utils';
import Header from '..';
import {MenusEnum} from '../components/AccountMenu/types';

// TODO: add logs to gitignore

const preloadedUserState = {
    ...authPreloadedState,
    navbar: {
        data: {
            isNavbarOpen: true,
        },
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    accountMenu: {
        data: {
            currentMenu: MenusEnum.mainMenu,
            prevMenus: [],
        },
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
};

describe('Header component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render all elements', () => {
        const {getByRole} = renderWithProvider(<Header />);

        const banner = getByRole('banner');

        const menuButton = within(banner).getByRole('button', {
            name: /open drawer/i,
        });
        expect(menuButton).toBeDefined();

        const logoHeading = within(banner).getByRole('heading', {
            name: /logo/i,
        });
        expect(logoHeading).toBeDefined();

        const searchForm = within(banner).getByTestId('Search form');
        expect(searchForm).toBeDefined();

        const logInButton = within(banner).getByRole('button', {
            name: /log in/i,
        });
        expect(logInButton).toBeDefined();
    });

    it('should render user photo instead of log in button if user signed in', async () => {
        const {getByRole} = renderWithProvider(<Header />, preloadedUserState);

        const banner = getByRole('banner');
        const logInButton = within(banner).queryByRole('button', {
            name: /log in/i,
        });
        const userMenu = getByRole('img', {
            name: /test test/i,
        });

        expect(userMenu).toBeDefined();
        expect(logInButton).toBeNull();
    });
});
