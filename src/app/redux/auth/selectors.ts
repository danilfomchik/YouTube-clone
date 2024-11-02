import {IRootState} from '../types';
import {IThunkNames} from './types';

export const selectUserData = (state: IRootState) => state.auth.data.userData;
export const selectIsUserLoggedIn = (state: IRootState) => state.auth.data.userLoggedIn;

export const selectSignUpStatus = (state: IRootState) => state.auth.statuses[IThunkNames.signUp];
export const selectSignInStatus = (state: IRootState) => state.auth.statuses[IThunkNames.signIn];

export const selectSignInError = (state: IRootState) => state.auth.errors[IThunkNames.signIn];
