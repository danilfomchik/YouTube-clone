import {within} from '@testing-library/react';

import {renderWithProviders} from '@/app/tests/utils';
import Header from '..';
import {MenusEnum} from '../components/AccountMenu/types';
import {authPreloadedState} from '@/app/tests/constants';

const preloadedState = {
    ...authPreloadedState,

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
    it('should render all elements', () => {
        const {getByRole} = renderWithProviders(<Header />);

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
    });

    it('should show open drawer icon', () => {
        const {getByRole} = renderWithProviders(<Header />, {
            preloadedState: {
                ...preloadedState,
                navbar: {
                    data: {
                        isNavbarOpen: false,
                    },
                    statuses: {},
                    errors: {},
                    lastRequestId: {},
                },
            },
        });

        const menuButton = getByRole('button', {
            name: /open drawer/i,
        });

        expect(menuButton).toBeInTheDocument();
    });

    it('should show close drawer icon', () => {
        const {getByRole} = renderWithProviders(<Header />, {
            preloadedState: {
                ...preloadedState,
                navbar: {
                    data: {
                        isNavbarOpen: true,
                    },
                    statuses: {},
                    errors: {},
                    lastRequestId: {},
                },
            },
        });

        const menuButton = getByRole('button', {
            name: /close drawer/i,
        });

        expect(menuButton).toBeInTheDocument();
    });
});
