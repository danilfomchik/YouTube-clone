import createGenericSlice from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {ICommonState} from './types';

const reducers = {
    setCurrentMenuIndex: (state: any, {payload}: {payload: number}) => {
        const currentIndex = state.data.currentMenuIndex;

        state.data.currentMenuIndex = payload;
        state.data.prevMenuIndex = currentIndex;
    },
    returnToPrevMenuIndex: (state: any) => {
        const prevMenuIndex = state.data.prevMenuIndex;

        state.data.currentMenuIndex = prevMenuIndex;
        state.data.prevMenuIndex = prevMenuIndex > 0 ? prevMenuIndex - 1 : prevMenuIndex;
    },
    resetMenuIndex: (state: any) => {
        state.data.currentMenuIndex = 0;
    },
};

const initialData = {
    currentMenuIndex: 0,
    prevMenuIndex: 0,
};

export const accountMenuData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.accountMenu,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: () => {},
});

export const {resetSlice, setCurrentMenuIndex, returnToPrevMenuIndex, resetMenuIndex} = accountMenuData.actions;
export default accountMenuData.reducer;
