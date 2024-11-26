import {IRootState} from '../types';
import {IThunkNames} from './types';

export const selectUserData = (state: IRootState) => state.auth.data.userData;
export const selectIsUserLoggedIn = (state: IRootState) => state.auth.data.userLoggedIn;
export const selectLoginAttemptsCount = (state: IRootState) => state.auth.data.loginAttempts;
export const selectMaxAttemptsCountAchieved = (state: IRootState) => state.auth.data.maxAttemptsCountAchieved;
export const selectLoginAttemptsTime = (state: IRootState) => state.auth.data.loginAttemptsTime;

export const selectSignUpStatus = (state: IRootState) => state.auth.statuses[IThunkNames.signUp];
export const selectSignInStatus = (state: IRootState) => state.auth.statuses[IThunkNames.signIn];
export const selectResetPasswordStatus = (state: IRootState) => state.auth.statuses[IThunkNames.resetPassword];

export const selectSignInError = (state: IRootState) => state.auth.errors[IThunkNames.signIn];
export const selectResetPasswordError = (state: IRootState) => state.auth.errors[IThunkNames.resetPassword];
