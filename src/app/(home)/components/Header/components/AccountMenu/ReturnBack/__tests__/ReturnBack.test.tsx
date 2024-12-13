import userEvent from '@testing-library/user-event';

import {setupStore} from '@/app/redux/store';
import {renderWithProviders} from '@/app/tests/utils';
import ReturnBack from '..';
import {returnToPrevMenu} from '@/app/redux/accountMenu/accountMenuSlice';
import {MenusEnum} from '../../types';
import {preloadedState} from '@/app/tests/constants';

describe('ReturnBack component', () => {
    const store = setupStore({
        ...preloadedState,
        accountMenu: {
            data: {
                currentMenu: MenusEnum.languageMenu,
                prevMenus: ['mainMenu', 'settingsMenu'] as MenusEnum[],
            },
            statuses: {},
            errors: {},
            lastRequestId: {},
        },
    });

    beforeAll(() => {
        store.dispatch = vi.fn();
    });

    it('should render Return back item', () => {
        const {getByRole, getByTestId} = renderWithProviders(<ReturnBack />);

        expect(
            getByRole('menuitem', {
                name: /return back/i,
            }),
        ).toBeInTheDocument();
        expect(getByTestId('ArrowBackIosNewRoundedIcon')).toBeInTheDocument();
    });

    it('should change current menu to previous one', async () => {
        const {store: currentStore, getByRole} = renderWithProviders(<ReturnBack />, {
            store,
        });

        await userEvent.click(
            getByRole('menuitem', {
                name: /return back/i,
            }),
        );

        expect(currentStore.dispatch).toHaveBeenCalledWith(returnToPrevMenu());
    });
});
