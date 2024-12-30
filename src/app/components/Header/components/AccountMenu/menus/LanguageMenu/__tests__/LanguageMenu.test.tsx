import {checkAllItemsRendered, renderWithProviders} from '@/app/tests/utils';
import LanguageMenu, {languages} from '..';

describe('LanguageMenu component', () => {
    it('should render all items', async () => {
        renderWithProviders(<LanguageMenu />);

        checkAllItemsRendered(languages);
    });
});
