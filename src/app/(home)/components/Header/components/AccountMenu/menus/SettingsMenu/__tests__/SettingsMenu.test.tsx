import {checkAllItemsRendered, renderWithProviders} from '@/app/tests/utils';
import SettingsMenu, {settings} from '..';

describe('SettingsMenu component', () => {
    it('should render all items', async () => {
        renderWithProviders(<SettingsMenu />);

        checkAllItemsRendered(settings);
    });
});
