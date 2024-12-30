import {checkAllItemsRendered, renderWithProviders} from '@/app/tests/utils';
import MainMenu from '..';
import {authPreloadedState} from '@/app/tests/constants';

const items = [
    {
        text: 'Add another account',
    },
    {
        text: 'Settings',
    },
    {
        text: 'Logout',
    },
];

describe('MainMenu component', () => {
    it('should render all items', async () => {
        renderWithProviders(<MainMenu />, {preloadedState: authPreloadedState});

        checkAllItemsRendered(items);
    });
});
