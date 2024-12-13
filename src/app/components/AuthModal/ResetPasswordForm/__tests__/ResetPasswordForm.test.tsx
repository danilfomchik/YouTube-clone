import userEvent from '@testing-library/user-event';

import {renderWithProviders} from '@/app/tests/utils';
import ResetPasswordForm from '..';
import {setupStore} from '@/app/redux/store';
import {notAuthPreloadedState} from '@/app/tests/constants';

describe('ResetPasswordForm component', () => {
    const store = setupStore(notAuthPreloadedState);

    beforeEach(() => {
        store.dispatch = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('should render reset password form elements', async () => {
        const {getByRole, getByText, getByPlaceholderText} = renderWithProviders(<ResetPasswordForm />);

        expect(
            getByText(/enter your user account's verified email address and we will send you a password reset link/i),
        ).toBeDefined();
        expect(getByPlaceholderText(/enter email/i)).toBeDefined();
        expect(
            getByRole('button', {
                name: /reset/i,
            }),
        ).toBeDefined();
        expect(
            getByRole('button', {
                name: /i already have account/i,
            }),
        ).toBeDefined();
    });

    it('should do not submit reset password form with wrong values', async () => {
        const {getByRole, queryByText} = renderWithProviders(<ResetPasswordForm />, {store});

        const submitSignInButton = getByRole('button', {
            name: /reset/i,
        });
        await userEvent.click(submitSignInButton);

        expect(queryByText(/email is required/i)).toBeDefined();
        expect(store.dispatch).not.toHaveBeenCalled();
    });

    it('should submit reset password form with correct values', async () => {
        const {getByRole, queryByText, getByPlaceholderText} = renderWithProviders(<ResetPasswordForm />, {store});

        const submitResetButton = getByRole('button', {
            name: /reset/i,
        });
        const emailField = getByPlaceholderText(/enter email/i);

        await userEvent.type(emailField, 'test@test.com');
        await userEvent.click(submitResetButton);

        expect(queryByText(/email is required/i)).toBeNull();
        expect(store.dispatch).toHaveBeenCalled();
    });
});
