import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {renderWithProvider} from '@/app/test-utils';
import SignInForm from '..';

describe('SignInForm component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render sign in form elements', async () => {
        const {getByRole, getByText, getByPlaceholderText} = renderWithProvider(<SignInForm />);

        const welcomeHeading = getByRole('heading', {
            name: /welcome!/i,
        });
        expect(welcomeHeading).toBeDefined();

        const welcomeText = getByText(/sign in to rate videos, add comments and subscribe to channels\./i);
        expect(welcomeText).toBeDefined();

        const forgotPasswordButton = getByRole('button', {
            name: /forgot password/i,
        });
        expect(forgotPasswordButton).toBeDefined();

        const emailField = getByPlaceholderText(/enter email/i);
        expect(emailField).toBeDefined();

        const passwordField = getByPlaceholderText(/enter password/i);
        expect(passwordField).toBeDefined();

        const submitSignInButton = getByRole('button', {
            name: /log in/i,
        });
        expect(submitSignInButton).toBeDefined();

        const googleLoginButton = getByRole('button', {
            name: /google/i,
        });
        expect(googleLoginButton).toBeDefined();

        const facebookLoginButton = getByRole('button', {
            name: /facebook/i,
        });
        expect(facebookLoginButton).toBeDefined();

        const signUpButton = getByRole('button', {
            name: /i don`t have account yet/i,
        });
        expect(signUpButton).toBeDefined();
    });

    it('should do not submit sign in form with wrong values', async () => {
        const {getByRole, queryByText} = renderWithProvider(<SignInForm />);

        const submitSignInButton = getByRole('button', {
            name: /log in/i,
        });

        expect(queryByText(/password is required/i)).toBeNull();
        expect(queryByText(/email is required/i)).toBeNull();

        await userEvent.click(submitSignInButton);

        expect(queryByText(/password is required/i)).toBeDefined();
        expect(queryByText(/email is required/i)).toBeDefined();
    });

    it('should submit sign in form with correct values', async () => {
        const {getByRole, queryByText, getByPlaceholderText} = renderWithProvider(<SignInForm />);

        const submitSignInButton = getByRole('button', {
            name: /log in/i,
        });
        const emailField = getByPlaceholderText(/enter email/i);
        const passwordField = getByPlaceholderText(/enter password/i);

        await userEvent.type(emailField, 'test@test.com');
        await userEvent.type(passwordField, 'test12345');

        await userEvent.click(submitSignInButton);

        expect(queryByText(/password is required/i)).toBeNull();
        expect(queryByText(/email is required/i)).toBeNull();
    });
});
