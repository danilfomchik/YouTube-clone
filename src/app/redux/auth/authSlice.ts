import Cookies from 'js-cookie';

import createGenericSlice, {IGenericState} from '../createGenericSlice';
import {ISlicesNames} from '../types';
import {onUserSignIn, onUserSignOut} from './thunks';
import {ICommonState, IUser} from './types';
import {StorageKeys} from '@/app/services/types';
import {initialSecondsValue, maxLoginAttempts} from '@/app/services/constants';
import {getParsedStorageValue} from '@/app/services/utils';

const reducers = {
    setUserData: (state: IGenericState<ICommonState>, {payload}: {payload: IUser}) => {
        state.data.userData = payload;
        state.data.userLoggedIn = true;
    },
    clearLoginAttempts: (state: IGenericState<ICommonState>) => {
        state.data.loginAttempts = 0;
        state.data.maxAttemptsCountAchieved = false;
        Cookies.remove(StorageKeys.loginAttempts);
    },
    setLoginAttemptsTime: (state: IGenericState<ICommonState>, {payload}: {payload: number}) => {
        if (payload === 0) {
            Cookies.remove(StorageKeys.loginAttemptsTime);
        } else {
            Cookies.set(StorageKeys.loginAttemptsTime, JSON.stringify(payload));
        }

        state.data.loginAttemptsTime = payload;
    },
};

const loginAttemptsCount = getParsedStorageValue(StorageKeys.loginAttempts, 0);
const initialLoginAttemptsTime = getParsedStorageValue(StorageKeys.loginAttemptsTime, initialSecondsValue);

const initialData = {
    userLoggedIn: false,
    userData: null,
    loginAttempts: loginAttemptsCount,
    maxAttemptsCountAchieved: loginAttemptsCount === maxLoginAttempts,
    loginAttemptsTime: initialLoginAttemptsTime,
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
        builder
            .addCase(onUserSignIn.rejected, state => {
                let loginAttempts = state.data.loginAttempts;

                state.data.loginAttempts = ++loginAttempts;

                if (loginAttempts === maxLoginAttempts) {
                    state.data.maxAttemptsCountAchieved = true;
                }
            })
            .addCase(onUserSignIn.fulfilled, (state, {payload}) => {
                state.data.userData = payload as IUser;
                state.data.userLoggedIn = true;

                authData.caseReducers.clearLoginAttempts(state);
            })
            .addCase(onUserSignOut.fulfilled, state => {
                authData.caseReducers.resetSlice(state);

                Cookies.remove(StorageKeys.userId);
            });
    },
});

export const {resetSlice, resetError, setUserData, clearLoginAttempts, setLoginAttemptsTime} = authData.actions;
export default authData.reducer;
