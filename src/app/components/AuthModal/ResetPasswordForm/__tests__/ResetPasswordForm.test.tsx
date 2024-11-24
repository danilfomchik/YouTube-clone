import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {renderWithProvider} from '@/app/test-utils';
import ResetPasswordForm from '..';

describe('ResetPasswordForm component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render reset password form elements', async () => {
        const {getByRole, getByText, getByPlaceholderText} = renderWithProvider(<ResetPasswordForm />);

        expect(
            getByText("Enter your user account's verified email address and we will send you a password reset link."),
        ).toBeDefined();

        const welcomeText = getByText(
            "Enter your user account's verified email address and we will send you a password reset link.",
        );
        expect(welcomeText).toBeDefined();

        const emailField = getByPlaceholderText(/enter email/i);
        expect(emailField).toBeDefined();

        const submitResetButton = getByRole('button', {
            name: /reset/i,
        });
        expect(submitResetButton).toBeDefined();

        const signInButton = getByRole('button', {
            name: /i already have account/i,
        });
        expect(signInButton).toBeDefined();
    });

    it('should do not submit reset password form with wrong values', async () => {
        const {getByRole, queryByText} = renderWithProvider(<ResetPasswordForm />);

        const submitSignInButton = getByRole('button', {
            name: /reset/i,
        });

        expect(queryByText(/email is required/i)).toBeNull();

        await userEvent.click(submitSignInButton);

        expect(queryByText(/email is required/i)).toBeDefined();
    });

    it('should submit reset password form with correct values', async () => {
        const {getByRole, queryByText, getByPlaceholderText} = renderWithProvider(<ResetPasswordForm />);

        const submitResetButton = getByRole('button', {
            name: /reset/i,
        });
        const emailField = getByPlaceholderText(/enter email/i);

        await userEvent.type(emailField, 'test@test.com');
        await userEvent.click(submitResetButton);

        expect(queryByText(/email is required/i)).toBeNull();
    });
});
