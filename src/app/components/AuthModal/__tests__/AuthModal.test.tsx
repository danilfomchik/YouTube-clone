import {within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import {renderWithProviders} from '@/app/tests/utils';
import AuthModal from '..';

describe('AuthModal component', () => {
    it('should close Auth modal', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByTestId, queryByRole} = renderWithProviders(<AuthModal />);

        const closeIcon = getByTestId('CloseRoundedIcon');
        await userEvent.click(closeIcon);

        expect(
            queryByRole('heading', {
                name: /welcome!/i,
            }),
        ).toBeNull();
    });

    it('should open sign up form', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole} = renderWithProviders(<AuthModal />);

        const signUpButton = getByRole('button', {
            name: /i don`t have account yet/i,
        });

        await userEvent.click(signUpButton);

        expect(mockRouter.asPath).toBe('/?auth=sign-up');
    });

    it('should open sign in form', async () => {
        mockRouter.push('/?auth=sign-up');

        const {getByRole} = renderWithProviders(<AuthModal />);

        const signInButton = getByRole('button', {
            name: /i already have account/i,
        });

        await userEvent.click(signInButton);

        expect(mockRouter.asPath).toBe('/?auth=sign-in');
    });

    it('should open reset password form', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole} = renderWithProviders(<AuthModal />);

        const authModal = getByRole('dialog');
        const forgotPasswordButton = within(authModal).getByRole('button', {
            name: /forgot password/i,
        });

        await userEvent.click(forgotPasswordButton);

        expect(mockRouter.asPath).toBe('/?auth=reset-password');
    });
});
