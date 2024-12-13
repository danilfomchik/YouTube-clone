import {renderWithProviders} from '@/app/tests/utils';
import User from '..';
import {MenusEnum} from '../../AccountMenu/types';
import {authPreloadedState} from '@/app/tests/constants';

describe('User component', () => {
    it('should render log in button if user is not logged in', async () => {
        const {getByRole} = renderWithProviders(<User isUserLoggedIn={false} />);

        const logInButton = getByRole('button', {
            name: /log in/i,
        });

        expect(logInButton).toBeDefined();
    });

    it('should render user photo if user is logged in', async () => {
        const {getByRole} = renderWithProviders(<User isUserLoggedIn={true} />, {
            preloadedState: {
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
            },
        });

        const user = getByRole('img', {
            name: /test test/i,
        });

        expect(user).toBeDefined();
    });
});
