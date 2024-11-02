import createGenericSlice, {IGenericState} from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {onUserSignInWithEmailAndPassword} from './thunks';
import {ICommonState, IUser} from './types';

const reducers = {
    setUserData: (state: IGenericState<ICommonState>, {payload}: {payload: IUser}) => {
        state.data.userData = payload;
        state.data.userLoggedIn = true;
    },
};

const initialData = {
    userLoggedIn: false,
    userData: null,
};

export const authData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.auth,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: builder => {
        builder.addCase(onUserSignInWithEmailAndPassword.fulfilled, (state, {payload}) => {
            state.data.userData = payload as IUser;
            state.data.userLoggedIn = true;
        });
    },
});

export const {resetSlice, resetError, setUserData} = authData.actions;
export default authData.reducer;
