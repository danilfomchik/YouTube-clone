import {createSlice} from '@reduxjs/toolkit';

import {ISlicesNames} from '../types';
import {ICommonState} from './types';

const reducers = {
    toggleNavbar: (state: {data: ICommonState}) => {
        state.data.isNavbarOpen = !state.data.isNavbarOpen;
    },
    setNavbarStatus: (state: {data: ICommonState}, {payload}: {payload: boolean}) => {
        state.data.isNavbarOpen = payload;
    },
};

const initialData = {
    isNavbarOpen: true,
};

export const navbarData = createSlice({
    name: ISlicesNames.navbar,
    initialState: {
        data: initialData,
    },
    reducers,
    extraReducers: () => {},
});

export const {toggleNavbar, setNavbarStatus} = navbarData.actions;
export default navbarData.reducer;
