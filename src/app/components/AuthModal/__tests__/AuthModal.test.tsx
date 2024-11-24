import {describe, it, expect, afterEach} from 'vitest';
import {cleanup, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import {renderWithProvider} from '@/app/test-utils';
import AuthModal from '..';

describe('AuthModal component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should close Auth modal', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByTestId, queryByRole} = renderWithProvider(<AuthModal />);

        const closeIcon = getByTestId('CloseRoundedIcon');
        expect(closeIcon).toBeDefined();

        await userEvent.click(closeIcon);

        expect(
            queryByRole('heading', {
                name: /welcome!/i,
            }),
        ).toBeNull();
    });

    it('should switch between sign in and sign up forms', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole, queryByRole} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');

        expect(
            within(authModal).getByText(/sign in to rate videos, add comments and subscribe to channels\./i),
        ).toBeDefined();

        expect(
            within(authModal).queryByText(/sign up to rate videos, add comments and subscribe to channels\./i),
        ).toBeNull();

        const signUpButton = queryByRole('button', {
            name: /i don`t have account yet/i,
        });

        if (signUpButton) {
            await userEvent.click(signUpButton);
        }

        expect(
            within(authModal).queryByText(/sign in to rate videos, add comments and subscribe to channels\./i),
        ).toBeNull();
        expect(
            within(authModal).getByText(/sign up to rate videos, add comments and subscribe to channels\./i),
        ).toBeDefined();
    });

    it('should open reset password form', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole, getByText} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');

        const forgotPasswordButton = within(authModal).getByRole('button', {
            name: /forgot password/i,
        });

        await userEvent.click(forgotPasswordButton);

        expect(
            getByText("Enter your user account's verified email address and we will send you a password reset link."),
        ).toBeDefined();
    });
});
