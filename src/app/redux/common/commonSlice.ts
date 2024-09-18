import createGenericSlice from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {ICommonState} from './types';

const reducers = {};

const initialData = {};

export const commonData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.common,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: () => {},
});

export const {resetSlice} = commonData.actions;
export default commonData.reducer;
