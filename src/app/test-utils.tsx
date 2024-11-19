import {PropsWithChildren, ReactElement} from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

import store, {getStoreWithState} from './redux/store';
import {IRootState} from './redux/types';

export const authPreloadedState = {
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
        },
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    suggestionApi: {} as any,
    snackbar: [] as any,
    navbar: {} as any,
    accountMenu: {} as any,
};

export const renderWithProvider = (element: ReactElement, state?: IRootState, options?: object) => {
    const store = getStoreWithState(state);
    setupListeners(store.dispatch);

    const utils = render(<Provider store={store}>{element}</Provider>, options);

    return {store, ...utils};
};

export function Wrapper({children}: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
}
