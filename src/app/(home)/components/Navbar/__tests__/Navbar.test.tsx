import {renderWithProviders} from '@/app/tests/utils';
import Navbar from '..';
import {pages} from '../constants';
import {notAuthPreloadedState, authPreloadedState} from '@/app/tests/constants';

describe('Navbar component', () => {
    it('should render navbar items and login button if user is not logged in', async () => {
        const {getAllByRole, getByRole} = renderWithProviders(<Navbar />, {
            preloadedState: {
                ...notAuthPreloadedState,
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

        expect(getAllByRole('listitem').length).toBe(pages.length);
        expect(
            getByRole('button', {
                name: /log in/i,
            }),
        ).toBeInTheDocument();
    });

    it('should render only navbar items if user is logged in', async () => {
        const {getAllByRole, queryByRole} = renderWithProviders(<Navbar />, {
            preloadedState: {
                ...authPreloadedState,
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

        expect(getAllByRole('listitem').length).toBe(pages.length);
        expect(
            queryByRole('button', {
                name: /log in/i,
            }),
        ).toBeNull();
    });
});
