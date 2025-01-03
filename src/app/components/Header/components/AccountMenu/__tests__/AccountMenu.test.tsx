import {within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {renderWithProviders} from '@/app/tests/utils';
import AccountMenu from '..';
import {MenusEnum} from '../types';
import {authPreloadedState} from '@/app/tests/constants';
import {setupStore} from '@/app/redux/store';
import {changeCurrentMenu} from '@/app/redux/accountMenu/accountMenuSlice';

describe('AccountMenu component', () => {
    const store = setupStore({
        ...authPreloadedState,
        accountMenu: {
            data: {
                currentMenu: MenusEnum.mainMenu,
                prevMenus: [],
            },
        },
    });

    beforeEach(() => {
        store.dispatch = vi.fn();
    });

    it('should open menu by click on user photo and render user name and photo', async () => {
        const {getByRole} = renderWithProviders(<AccountMenu />, {
            preloadedState: {
                ...authPreloadedState,
                accountMenu: {
                    data: {
                        currentMenu: MenusEnum.mainMenu,
                        prevMenus: [],
                    },
                },
            },
        });

        const accountSettingsButton = getByRole('button', {
            name: /account settings/i,
        });
        await userEvent.click(accountSettingsButton);

        const accountMenu = getByRole('menu');
        expect(accountMenu).toBeDefined();

        const userProfileImage = within(accountMenu).getByRole('img', {
            name: /test test/i,
        });
        expect(userProfileImage).toBeDefined();

        const userDisplayName = within(accountMenu).getByText(/test test/i);
        expect(userDisplayName).toBeDefined();
    });

    it('should switch between menus', async () => {
        const {getByRole} = renderWithProviders(<AccountMenu />, {
            store,
        });

        const accountSettingsButton = getByRole('button', {
            name: /account settings/i,
        });
        await userEvent.click(accountSettingsButton);

        const settingsMenuItem = getByRole('menuitem', {
            name: /settings/i,
        });
        await userEvent.click(settingsMenuItem);

        expect(store.dispatch).toHaveBeenCalledWith(
            changeCurrentMenu({nextMenu: MenusEnum.settingsMenu, prevMenu: MenusEnum.mainMenu}),
        );
    });
});
