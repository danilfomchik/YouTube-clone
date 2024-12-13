import {renderWithProviders} from '@/app/tests/utils';
import NotAuthorized from '..';

describe('NavbarItem component', () => {
    it(`should `, async () => {
        const {getByText, getByRole} = renderWithProviders(<NotAuthorized isNavbarOpen={true} />);

        expect(getByText(/log in to rate videos, add comments and subscribe to channels\./i)).toBeInTheDocument();
        expect(
            getByRole('button', {
                name: /log in/i,
            }),
        ).toBeInTheDocument();
    });
});
