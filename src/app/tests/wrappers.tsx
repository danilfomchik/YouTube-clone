import {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';

import store, {AppStore} from '../redux/store';

// TODO: fix it (temporary solution)
export function WrapperWithCustomStore({children, myStore}: PropsWithChildren<{myStore: AppStore}>) {
    return <Provider store={myStore}>{children}</Provider>;
}
export const WrapperWithInitialStore = ({children}: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
};
