import {within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouterProvider} from 'next-router-mock/dist/MemoryRouterProvider';
import mockRouter from 'next-router-mock';

import LibraryIconSvg from '@/app/common/assets/svg/library-icon/libraryIconSvg.svg';
import ActiveLibraryIconSvg from '@/app/common/assets/svg/library-icon/activeLibraryIconSvg.svg';
import {renderWithProviders} from '@/app/tests/utils';
import NavbarItem from '..';

const testPage = {
    label: 'Test Page',
    defaultIcon: <LibraryIconSvg />,
    activeIcon: <ActiveLibraryIconSvg />,
    path: '/test-page',
};

describe('NavbarItem component', () => {
    const handleClick = vi.fn();

    it(`should render ${testPage.label} link`, async () => {
        const {getByRole} = renderWithProviders(
            <NavbarItem
                page={testPage}
                isNavbarOpen={true}
                handleListItemClick={handleClick}
                isSelected={false}
                pageIndex={0}
            />,
        );

        const link = getByRole('link', {
            name: testPage.label,
        });

        expect(within(link).getByRole('listitem')).toBeDefined();
        expect(link).toHaveAttribute('href', testPage.path);
    });

    it(`should redirect to ${testPage.path}`, async () => {
        const {getByRole} = renderWithProviders(
            <NavbarItem
                page={testPage}
                isNavbarOpen={true}
                handleListItemClick={handleClick}
                isSelected={false}
                pageIndex={0}
            />,
            {wrapper: MemoryRouterProvider},
        );

        const link = getByRole('link', {
            name: testPage.label,
        });

        await userEvent.click(link);

        expect(mockRouter.asPath).toEqual(testPage.path);
    });
});
