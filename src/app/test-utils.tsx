import {ReactElement} from 'react';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';

import {getStoreWithState} from './redux/store';
import {IRootState} from './redux/types';

export const renderWithProvider = (element: ReactElement, state?: IRootState, options?: object) => {
    const store = getStoreWithState(state);
    const utils = render(<Provider store={store}>{element}</Provider>, options);

    return {store, ...utils};
};
