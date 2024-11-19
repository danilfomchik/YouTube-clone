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

    it('should render sign in form elements', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');
        expect(authModal).toBeDefined();

        const welcomeHeading = within(authModal).getByRole('heading', {
            name: /welcome!/i,
        });
        expect(welcomeHeading).toBeDefined();

        const welcomeText = within(authModal).getByText(
            /sign in to rate videos, add comments and subscribe to channels\./i,
        );
        expect(welcomeText).toBeDefined();

        const emailField = within(authModal).getByPlaceholderText(/enter email/i);
        expect(emailField).toBeDefined();

        const passwordField = within(authModal).getByPlaceholderText(/enter password/i);
        expect(passwordField).toBeDefined();

        const submitSignInButton = within(authModal).getByRole('button', {
            name: /log in/i,
        });
        expect(submitSignInButton).toBeDefined();

        const googleLoginButton = within(authModal).getByRole('button', {
            name: /google/i,
        });
        expect(googleLoginButton).toBeDefined();

        const facebookLoginButton = within(authModal).getByRole('button', {
            name: /facebook/i,
        });
        expect(facebookLoginButton).toBeDefined();

        const signUpButton = getByRole('button', {
            name: /i don`t have account yet/i,
        });
        expect(signUpButton).toBeDefined();
    });

    it('should render sign up form elements', async () => {
        mockRouter.push('/?auth=sign-up');

        const {getByRole} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');
        expect(authModal).toBeDefined();

        const welcomeHeading = within(authModal).getByRole('heading', {
            name: /welcome!/i,
        });
        expect(welcomeHeading).toBeDefined();

        const welcomeText = within(authModal).getByText(
            /sign up to rate videos, add comments and subscribe to channels\./i,
        );
        expect(welcomeText).toBeDefined();

        const firstNameField = within(authModal).getByPlaceholderText(/enter firstname/i);
        expect(firstNameField).toBeDefined();

        const lastNameField = within(authModal).getByPlaceholderText(/enter lastname/i);
        expect(lastNameField).toBeDefined();

        const emailField = within(authModal).getByPlaceholderText(/enter email/i);
        expect(emailField).toBeDefined();

        const passwordField = within(authModal).getByPlaceholderText(/enter password/i);
        expect(passwordField).toBeDefined();

        const confirmPasswordField = within(authModal).getByPlaceholderText(/confirm password/i);
        expect(confirmPasswordField).toBeDefined();

        const uploadFileButton = getByRole('button', {
            name: /choose profile photo/i,
        });
        expect(uploadFileButton).toBeDefined();

        const submitSignupButton = within(authModal).getByRole('button', {
            name: /sign up/i,
        });
        expect(submitSignupButton).toBeDefined();

        const signInButton = getByRole('button', {
            name: /i already have account/i,
        });
        expect(signInButton).toBeDefined();
    });

    it('should switch between sign in and sign up forms', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole, queryByRole} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');

        expect(
            within(authModal).getByText(/sign in to rate videos, add comments and subscribe to channels\./i),
        ).toBeDefined();

        expect(
            within(authModal).getByRole('button', {
                name: /log in/i,
            }),
        ).toBeDefined();

        expect(
            getByRole('button', {
                name: /i don`t have account yet/i,
            }),
        ).toBeDefined();

        expect(
            within(authModal).queryByText(/sign up to rate videos, add comments and subscribe to channels\./i),
        ).toBeNull();

        expect(
            within(authModal).queryByRole('button', {
                name: /sign up/i,
            }),
        ).toBeNull();

        expect(
            queryByRole('button', {
                name: /i already have account/i,
            }),
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

        expect(
            within(authModal).queryByRole('button', {
                name: /log in/i,
            }),
        ).toBeNull();
        expect(
            within(authModal).getByRole('button', {
                name: /sign up/i,
            }),
        ).toBeDefined();

        expect(
            queryByRole('button', {
                name: /i don`t have account yet/i,
            }),
        ).toBeNull();
        expect(
            getByRole('button', {
                name: /i already have account/i,
            }),
        ).toBeDefined();
    });

    it('should do not submit sign in form with wrong values', async () => {
        mockRouter.push('/?auth=sign-in');

        const {getByRole, queryByText} = renderWithProvider(<AuthModal />);

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
        mockRouter.push('/?auth=sign-in');

        const {getByRole, queryByText} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');

        const submitSignInButton = within(authModal).getByRole('button', {
            name: /log in/i,
        });
        const emailField = within(authModal).getByPlaceholderText(/enter email/i);
        const passwordField = within(authModal).getByPlaceholderText(/enter password/i);

        await userEvent.type(emailField, 'test@test.com');
        await userEvent.type(passwordField, 'test12345');

        await userEvent.click(submitSignInButton);

        expect(queryByText(/password is required/i)).toBeNull();
        expect(queryByText(/email is required/i)).toBeNull();
    });

    it('should do not submit sign up form with wrong values', async () => {
        mockRouter.push('/?auth=sign-up');

        const {getByRole, queryByText} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');

        const submitSignUpButton = within(authModal).getByRole('button', {
            name: /sign up/i,
        });

        expect(queryByText(/enter your first name/i)).toBeNull();
        expect(queryByText(/enter your lastname/i)).toBeNull();
        expect(queryByText(/email is required/i)).toBeNull();
        expect(queryByText(/password is required/i)).toBeNull();
        expect(queryByText(/confirm your password/i)).toBeNull();

        await userEvent.click(submitSignUpButton);

        expect(queryByText(/enter your first name/i)).toBeDefined();
        expect(queryByText(/enter your lastname/i)).toBeDefined();
        expect(queryByText(/email is required/i)).toBeDefined();
        expect(queryByText(/password is required/i)).toBeDefined();
        expect(queryByText(/confirm your password/i)).toBeDefined();

        const firstNameField = within(authModal).getByPlaceholderText(/enter firstname/i);
        const lastNameField = within(authModal).getByPlaceholderText(/enter lastname/i);
        const emailField = within(authModal).getByPlaceholderText(/enter email/i);
        const passwordField = within(authModal).getByPlaceholderText(/enter password/i);
        const confirmPasswordField = within(authModal).getByPlaceholderText(/confirm password/i);

        await userEvent.type(firstNameField, 'g');
        await userEvent.type(lastNameField, 'g2');
        await userEvent.type(emailField, 'g');
        await userEvent.type(passwordField, 'g');
        await userEvent.type(confirmPasswordField, 'gg');

        expect(queryByText(/first name should be greater than 2 characters/i)).toBeDefined();
        expect(queryByText(/only Latin letters, spaces and hyphens are allowed/i)).toBeDefined();
        expect(queryByText(/enter correct email/i)).toBeDefined();
        expect(
            queryByText(/the password must contain Latin letters and numbers and be at least 6 characters long/i),
        ).toBeDefined();
        expect(queryByText(/passwords do not match/i)).toBeDefined();

        await userEvent.type(firstNameField, 'test');
        await userEvent.clear(lastNameField);
        await userEvent.type(lastNameField, 'test');
        await userEvent.type(emailField, '@test.com');
        await userEvent.type(passwordField, 'test123');
        await userEvent.type(confirmPasswordField, 'test123');

        expect(queryByText(/password should not contain first name/i)).toBeDefined();

        await userEvent.clear(passwordField);
        await userEvent.type(passwordField, 'g1test123');

        expect(queryByText(/password should not contain last name/i)).toBeDefined();
    });

    it('should submit sign up form with correct values', async () => {
        mockRouter.push('/?auth=sign-up');

        const {getByRole, queryByText} = renderWithProvider(<AuthModal />);

        const authModal = getByRole('dialog');

        const submitSignUpButton = within(authModal).getByRole('button', {
            name: /sign up/i,
        });
        const firstNameField = within(authModal).getByPlaceholderText(/enter firstname/i);
        const lastNameField = within(authModal).getByPlaceholderText(/enter lastname/i);
        const emailField = within(authModal).getByPlaceholderText(/enter email/i);
        const passwordField = within(authModal).getByPlaceholderText(/enter password/i);
        const confirmPasswordField = within(authModal).getByPlaceholderText(/confirm password/i);

        await userEvent.type(firstNameField, 'test');
        await userEvent.type(lastNameField, 'test');
        await userEvent.type(emailField, 'test@test.com');
        await userEvent.type(passwordField, '111111q');
        await userEvent.type(confirmPasswordField, '111111q');

        await userEvent.click(submitSignUpButton);

        expect(queryByText(/enter your first name/i)).toBeNull();
        expect(queryByText(/enter your lastname/i)).toBeNull();
        expect(queryByText(/email is required/i)).toBeNull();
        expect(queryByText(/password is required/i)).toBeNull();
        expect(queryByText(/confirm your password/i)).toBeNull();

        expect(queryByText(/first name should be greater than 2 characters/i)).toBeNull();
        expect(queryByText(/only Latin letters, spaces and hyphens are allowed/i)).toBeNull();
        expect(queryByText(/enter correct email/i)).toBeNull();
        expect(
            queryByText(/the password must contain Latin letters and numbers and be at least 6 characters long/i),
        ).toBeNull();
        expect(queryByText(/passwords do not match/i)).toBeNull();
        expect(queryByText(/password should not contain first name/i)).toBeNull();
        expect(queryByText(/password should not contain last name/i)).toBeNull();
    });

    it.todo('test logout function');
    it.todo('test signin function');
    it.todo('test signup function');
});
