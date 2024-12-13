import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import {renderWithProviders} from '@/app/tests/utils';
import LoginButton from '..';

describe('LoginButton component', () => {
    it('should open Auth modal', async () => {
        const {getByRole, queryByRole} = renderWithProviders(<LoginButton />);

        expect(queryByRole('dialog')).toBeNull();

        const logInButton = getByRole('button', {
            name: /log in/i,
        });

        await userEvent.click(logInButton);

        expect(mockRouter.asPath).toBe(`/?auth=sign-in`);
        expect(getByRole('dialog')).toBeDefined();
    });
});
