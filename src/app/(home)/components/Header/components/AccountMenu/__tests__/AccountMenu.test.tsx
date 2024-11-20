import {describe, it, expect, afterEach} from 'vitest';
import {cleanup, screen, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {authPreloadedState, renderWithProvider} from '@/app/test-utils';
import AccountMenu from '..';
import {MenusEnum} from '../types';
import {languages} from '../menus/LanguageMenu';
import {themes} from '../menus/ThemeMenu';

const checkAllItemsRendered = (arr: {text: string}[]) => {
    arr.forEach(item => {
        expect(
            screen.getByRole('menuitem', {
                name: item.text,
            }),
        ).toBeDefined();
    });
};

const checkAllItemsNotRendered = (arr: {text: string}[]) => {
    arr.forEach(item => {
        expect(
            screen.queryByRole('menuitem', {
                name: item.text,
            }),
        ).toBeNull();
    });
};

describe('AccountMenu component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should open menu by click on user photo', async () => {
        const {getByRole} = renderWithProvider(<AccountMenu />, {
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
        });

        const accountSettingsButton = getByRole('button', {
            name: /account settings/i,
        });
        await userEvent.click(accountSettingsButton);

        const userMenu = getByRole('menu');
        expect(userMenu).toBeDefined();

        const userProfileImage = within(userMenu).getByRole('img', {
            name: /test test/i,
        });
        expect(userProfileImage).toBeDefined();

        const userDisplayName = within(userMenu).getByText(/test test/i);
        expect(userDisplayName).toBeDefined();

        const addAnotherAccountMenuItem = within(userMenu).getByRole('menuitem', {
            name: /add another account/i,
        });
        expect(addAnotherAccountMenuItem).toBeDefined();
        const settingsMenuItem = within(userMenu).getByRole('menuitem', {
            name: /settings/i,
        });
        expect(settingsMenuItem).toBeDefined();
        const logoutMenuItem = within(userMenu).getByRole('menuitem', {
            name: /logout/i,
        });
        expect(logoutMenuItem).toBeDefined();
    });

    it('should open sub menus', async () => {
        const {getByRole} = renderWithProvider(<AccountMenu />, {
            ...authPreloadedState,
            accountMenu: {
                data: {
                    currentMenu: MenusEnum.settingsMenu,
                    prevMenus: [MenusEnum.mainMenu],
                },
                statuses: {},
                errors: {},
                lastRequestId: {},
            },
        });

        const accountSettingsButton = getByRole('button', {
            name: /account settings/i,
        });
        await userEvent.click(accountSettingsButton);

        const returnBack = getByRole('menuitem', {
            name: /return back/i,
        });
        expect(returnBack).toBeDefined();
        const languageMenuItem = getByRole('menuitem', {
            name: /language/i,
        });
        expect(languageMenuItem).toBeDefined();
        const themeMenuItem = getByRole('menuitem', {
            name: /theme/i,
        });
        expect(themeMenuItem).toBeDefined();

        await userEvent.click(
            getByRole('menuitem', {
                name: /language/i,
            }),
        );

        checkAllItemsRendered(languages);

        await userEvent.click(returnBack);

        checkAllItemsNotRendered(languages);

        await userEvent.click(
            getByRole('menuitem', {
                name: /theme/i,
            }),
        );

        checkAllItemsRendered(themes);
    });
});
