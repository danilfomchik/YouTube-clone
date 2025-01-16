import {renderWithProviders} from '@/app/tests/utils';
import Categories from '..';
import {preloadedState} from '@/app/tests/constants';
import {mockedCategories} from '@/app/(home)/__tests__/mocks';

describe('MainPage component', () => {
    it('should render categories', async () => {
        const {getByRole} = renderWithProviders(<Categories />, {
            preloadedState: {
                ...preloadedState,
                navbar: {
                    data: {
                        isNavbarOpen: false,
                    },
                },
                categoriesData: {
                    data: {
                        categories: mockedCategories,
                        currentCategory: '',
                        currentCategoryIndex: 0,
                    },
                    statuses: {},
                    errors: {},
                    lastRequestId: {},
                },
            },
        });

        expect(
            getByRole('tab', {
                name: /all/i,
            }),
        ).toBeInTheDocument();

        for (const category of mockedCategories) {
            const categoryItem = getByRole('tab', {
                name: category.snippet.title,
            });

            expect(categoryItem).toBeInTheDocument();
        }
    });
});
