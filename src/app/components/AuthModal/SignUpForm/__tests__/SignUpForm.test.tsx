import {describe, it, expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {renderWithProvider} from '@/app/test-utils';
import SignUpForm from '..';

describe('SignUpForm component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render sign up form elements', async () => {
        const {getByRole, getByText, getByPlaceholderText} = renderWithProvider(<SignUpForm />);

        const welcomeHeading = getByRole('heading', {
            name: /welcome!/i,
        });
        expect(welcomeHeading).toBeDefined();

        const welcomeText = getByText(/sign up to rate videos, add comments and subscribe to channels\./i);
        expect(welcomeText).toBeDefined();

        const firstNameField = getByPlaceholderText(/enter firstname/i);
        expect(firstNameField).toBeDefined();

        const lastNameField = getByPlaceholderText(/enter lastname/i);
        expect(lastNameField).toBeDefined();

        const emailField = getByPlaceholderText(/enter email/i);
        expect(emailField).toBeDefined();

        const passwordField = getByPlaceholderText(/enter password/i);
        expect(passwordField).toBeDefined();

        const confirmPasswordField = getByPlaceholderText(/confirm password/i);
        expect(confirmPasswordField).toBeDefined();

        const uploadFileButton = getByRole('button', {
            name: /choose profile photo/i,
        });
        expect(uploadFileButton).toBeDefined();

        const submitSignupButton = getByRole('button', {
            name: /sign up/i,
        });
        expect(submitSignupButton).toBeDefined();

        const signInButton = getByRole('button', {
            name: /i already have account/i,
        });
        expect(signInButton).toBeDefined();
    });

    it('should do not submit sign up form with wrong values', async () => {
        const {getByRole, queryByText, getByPlaceholderText} = renderWithProvider(<SignUpForm />);

        const submitSignUpButton = getByRole('button', {
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

        const firstNameField = getByPlaceholderText(/enter firstname/i);
        const lastNameField = getByPlaceholderText(/enter lastname/i);
        const emailField = getByPlaceholderText(/enter email/i);
        const passwordField = getByPlaceholderText(/enter password/i);
        const confirmPasswordField = getByPlaceholderText(/confirm password/i);

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
        const {getByRole, queryByText, getByPlaceholderText} = renderWithProvider(<SignUpForm />);

        const submitSignUpButton = getByRole('button', {
            name: /sign up/i,
        });
        const firstNameField = getByPlaceholderText(/enter firstname/i);
        const lastNameField = getByPlaceholderText(/enter lastname/i);
        const emailField = getByPlaceholderText(/enter email/i);
        const passwordField = getByPlaceholderText(/enter password/i);
        const confirmPasswordField = getByPlaceholderText(/confirm password/i);

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
});
