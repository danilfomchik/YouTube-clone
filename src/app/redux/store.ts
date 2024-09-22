import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {snackbarData} from './snackbar/snackbarSlice';
import {snackbarMiddleware} from './snackbar/middleware';
import {navbarData} from './navbar/navbarSlice';

const combinedReducer = combineReducers({
    snackbar: snackbarData.reducer,
    navbar: navbarData.reducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(snackbarMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
