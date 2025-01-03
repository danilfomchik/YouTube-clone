import {within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SignInForm from '..';
import {initialLocation, maxLoginAttempts} from '@/app/services/constants';
import {renderWithProviders} from '@/app/tests/utils';
import {authPreloadedState, notAuthPreloadedState, preloadedState} from '@/app/tests/constants';
import {setupStore} from '@/app/redux/store';

describe('SignInForm component', () => {
    const store = setupStore(notAuthPreloadedState);

    beforeEach(() => {
        store.dispatch = vi.fn();
    });

    it('should render sign in form elements', async () => {
        const {getByRole, getByText, getByPlaceholderText} = renderWithProviders(<SignInForm />);

        expect(
            getByRole('heading', {
                name: /welcome!/i,
            }),
        ).toBeDefined();

        expect(getByText(/sign in to rate videos, add comments and subscribe to channels\./i)).toBeDefined();

        expect(
            getByRole('button', {
                name: /forgot password/i,
            }),
        ).toBeDefined();

        expect(getByPlaceholderText(/enter email/i)).toBeDefined();

        expect(getByPlaceholderText(/enter password/i)).toBeDefined();

        expect(
            getByRole('button', {
                name: /log in/i,
            }),
        ).toBeDefined();

        expect(
            getByRole('button', {
                name: /google/i,
            }),
        ).toBeDefined();

        expect(
            getByRole('button', {
                name: /facebook/i,
            }),
        ).toBeDefined();

        expect(
            getByRole('button', {
                name: /i don`t have account yet/i,
            }),
        ).toBeDefined();
    });

    it('should do not submit sign in form with wrong values', async () => {
        const {getByRole, queryByText} = renderWithProviders(<SignInForm />, {store});

        const submitSignInButton = getByRole('button', {
            name: /log in/i,
        });

        await userEvent.click(submitSignInButton);

        expect(queryByText(/password is required/i)).toBeDefined();
        expect(queryByText(/email is required/i)).toBeDefined();
        expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('should show error message and attempts count if email or password are incorrect', () => {
        const attempts = 1;

        const {getByRole} = renderWithProviders(<SignInForm />, {
            preloadedState: {
                ...preloadedState,
                auth: {
                    ...authPreloadedState.auth,
                    // TODO: fix types
                    data: {
                        userLoggedIn: false,
                        userData: null,
                        userLocation: initialLocation,
                        loginAttempts: attempts,
                        maxAttemptsCountAchieved: false,
                        loginAttemptsTime: 300,
                    },
                    errors: {
                        signIn: {
                            error: {
                                name: '',
                                message: 'Rejected',
                            },
                            payload: {} as any,
                            requestId: '',
                        },
                    },
                },
            },
        });

        const alert = getByRole('alert');

        const errorMessage = within(alert).getByText(
            `Incorrect email or password. Attempt ${attempts}/${maxLoginAttempts}`,
        );

        expect(errorMessage).toBeDefined();
    });

    it('should submit sign in form with correct values', async () => {
        const {getByRole, queryByText, getByPlaceholderText} = renderWithProviders(<SignInForm />, {store});

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
        expect(store.dispatch).toHaveBeenCalled();
    });
});
