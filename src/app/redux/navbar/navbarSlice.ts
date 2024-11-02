import createGenericSlice, {IGenericState} from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {ICommonState} from './types';

const reducers = {
    toggleNavbar: (state: IGenericState<ICommonState>) => {
        state.data.isNavbarOpen = !state.data.isNavbarOpen;
    },
    setNavbarStatus: (state: IGenericState<ICommonState>, {payload}: {payload: boolean}) => {
        state.data.isNavbarOpen = payload;
    },
};

const initialData = {
    isNavbarOpen: false,
};

export const navbarData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.navbar,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: () => {},
});

export const {resetSlice, toggleNavbar, setNavbarStatus} = navbarData.actions;
export default navbarData.reducer;
