import {checkAllItemsRendered, renderWithProviders} from '@/app/tests/utils';
import ThemeMenu, {themes} from '..';

describe('ThemeMenu component', () => {
    it('should render all items', async () => {
        renderWithProviders(<ThemeMenu />);

        checkAllItemsRendered(themes);
    });
});
