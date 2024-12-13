import {renderWithProviders} from '@/app/tests/utils';
import Notfound from '../page';

describe('NotFound page', () => {
    it('should render all elements', () => {
        const {getByRole} = renderWithProviders(<Notfound />);

        expect(
            getByRole('heading', {
                name: /404/i,
            }),
        ).toBeInTheDocument();

        expect(
            getByRole('button', {
                name: /go back/i,
            }),
        ).toBeInTheDocument();
    });
});
