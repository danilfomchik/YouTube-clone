import {AppStoreState} from '../redux/store';
import {initialLocation, initialSecondsValue} from '../services/constants';

export const preloadedState: AppStoreState = {
    auth: {} as any,
    suggestionApi: {} as any,
    snackbar: [] as any,
    navbar: {} as any,
    accountMenu: {} as any,
    videosData: {} as any,
};

export const authPreloadedState: AppStoreState = {
    ...preloadedState,
    auth: {
        data: {
            userLoggedIn: true,
            userData: {
                displayName: 'test test',
                email: 'test@test.com',
                lastLogin: 'Sat, 16 Nov 2024 10:24:02 GMT',
                uid: 'Ye7DqQk9gXUCeMYj5rAabyj7DtVh',
                photoURL:
                    // eslint-disable-next-line max-len
                    'http://127.0.0.1:9199/v0/b/mini-youtube-react-372508.appspot.com/o/profiles%2FYe7DqQk9gXUCeMYj5rAabyj7DtVh%2F83fae672-de54-4950-9c62-92cc43926a8d.JPG?alt=media&token=dbacef64-b6f6-4b4b-9f6f-b4f426bafd33',
            },
            userLocation: initialLocation,
            loginAttempts: 0,
            maxAttemptsCountAchieved: false,
            loginAttemptsTime: initialSecondsValue,
        },
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
};

export const notAuthPreloadedState: AppStoreState = {
    ...preloadedState,
    auth: {
        data: {
            userLoggedIn: false,
            userData: null,
            userLocation: initialLocation,
            loginAttempts: 0,
            maxAttemptsCountAchieved: false,
            loginAttemptsTime: initialSecondsValue,
        },
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
};
