import {initialLocation, maxLoginAttempts} from '@/app/services/constants';
import {renderWithProviders} from '@/app/tests/utils';
import SignInAttempts from '..';
import {notAuthPreloadedState} from '@/app/tests/constants';

describe('group', () => {
    it(`should show attempts timer if attempts equal to ${maxLoginAttempts}`, () => {
        const {getByText} = renderWithProviders(<SignInAttempts />, {
            preloadedState: {
                ...notAuthPreloadedState,
                auth: {
                    data: {
                        userLoggedIn: false,
                        userData: null,
                        userLocation: initialLocation,
                        loginAttempts: maxLoginAttempts,
                        maxAttemptsCountAchieved: true,
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
                    statuses: {},
                    lastRequestId: {},
                },
            },
        });

        const errorMessage = getByText(/too many failed login attempts. please try again after 05:00./i);

        expect(errorMessage).toBeDefined();
    });
});
