import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {snackbarData} from './snackbar/snackbarSlice';
import {snackbarMiddleware} from './snackbar/middleware';
import {navbarData} from './navbar/navbarSlice';
import {accountMenuData} from './accountMenu/accountMenuSlice';
import {suggestionApi} from './suggestions/api';

const combinedReducer = combineReducers({
    snackbar: snackbarData.reducer,
    navbar: navbarData.reducer,
    accountMenu: accountMenuData.reducer,
    [suggestionApi.reducerPath]: suggestionApi.reducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(snackbarMiddleware, suggestionApi.middleware),
});

export const getStoreWithState = (preloadedState?: ReturnType<typeof store.getState>) => {
    return configureStore({
        reducer: combinedReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware(),
        preloadedState,
    });
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
