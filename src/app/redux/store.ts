import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {snackbarData} from './snackbar/snackbarSlice';
import {snackbarMiddleware} from './snackbar/middleware';
import {navbarData} from './navbar/navbarSlice';
import {accountMenuData} from './accountMenu/accountMenuSlice';
import {suggestionApi} from './suggestions/api';
import {authData} from './auth/authSlice';

const combinedReducer = combineReducers({
    snackbar: snackbarData.reducer,
    navbar: navbarData.reducer,
    accountMenu: accountMenuData.reducer,
    auth: authData.reducer,
    [suggestionApi.reducerPath]: suggestionApi.reducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(snackbarMiddleware, suggestionApi.middleware),
});

export type AppStoreState = ReturnType<typeof store.getState>;

export const setupStore = (preloadedState?: AppStoreState) => {
    return configureStore({
        reducer: combinedReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(suggestionApi.middleware),
        preloadedState,
    });
};

export type RootState = ReturnType<typeof combinedReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
