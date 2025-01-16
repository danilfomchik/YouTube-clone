import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {snackbarData} from './snackbar/snackbarSlice';
import {snackbarMiddleware} from './snackbar/middleware';
import {navbarData} from './navbar/navbarSlice';
import {accountMenuData} from './accountMenu/accountMenuSlice';
import {suggestionApi} from './suggestions/api';
import {authData} from './auth/authSlice';
import {videosData} from './videosList/videosListSlice';
import {ISlicesNames} from './types';
import {categoriesData} from './categories/categoriesSlice';

const combinedReducer = combineReducers({
    [ISlicesNames.snackbar]: snackbarData.reducer,
    [ISlicesNames.navbar]: navbarData.reducer,
    [ISlicesNames.accountMenu]: accountMenuData.reducer,
    [ISlicesNames.auth]: authData.reducer,
    [suggestionApi.reducerPath]: suggestionApi.reducer,
    [ISlicesNames.videosData]: videosData.reducer,
    [ISlicesNames.categoriesData]: categoriesData.reducer,
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
