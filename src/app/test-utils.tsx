import {PropsWithChildren, ReactElement} from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

import store, {getStoreWithState} from './redux/store';
import {IRootState} from './redux/types';

export const renderWithProvider = (element: ReactElement, state?: IRootState, options?: object) => {
    const store = getStoreWithState(state);
    setupListeners(store.dispatch);

    const utils = render(<Provider store={store}>{element}</Provider>, options);

    return {store, ...utils};
};

export function Wrapper({children}: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
}
