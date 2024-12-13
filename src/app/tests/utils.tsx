import {ReactElement} from 'react';
import {screen, render, RenderOptions} from '@testing-library/react';

import {AppStore, RootState, setupStore} from '../redux/store';
import {WrapperWithCustomStore} from './wrappers';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    store?: AppStore;
}

export function renderWithProviders(
    ui: ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState as any),
        ...renderOptions
    }: ExtendedRenderOptions = {},
) {
    return {
        store,
        ...render(<WrapperWithCustomStore myStore={store}>{ui}</WrapperWithCustomStore>, {...renderOptions}),
    };
}

export const checkAllItemsRendered = (arr: {text: string}[]) => {
    arr.forEach(item => {
        expect(
            screen.getByRole('menuitem', {
                name: item.text,
            }),
        ).toBeDefined();
    });
};

export const checkAllItemsNotRendered = (arr: {text: string}[]) => {
    arr.forEach(item => {
        expect(
            screen.queryByRole('menuitem', {
                name: item.text,
            }),
        ).toBeNull();
    });
};
