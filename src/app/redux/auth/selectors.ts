import {AppStoreState} from '../store';
import {IThunkNames} from './types';

export const selectUserData = (state: AppStoreState) => state.auth.data.userData;
export const selectUserLocation = (state: AppStoreState) => state.auth.data.userLocation;
export const selectIsUserLoggedIn = (state: AppStoreState) => state.auth.data.userLoggedIn;
export const selectLoginAttemptsCount = (state: AppStoreState) => state.auth.data.loginAttempts;
export const selectMaxAttemptsCountAchieved = (state: AppStoreState) => state.auth.data.maxAttemptsCountAchieved;
export const selectLoginAttemptsTime = (state: AppStoreState) => state.auth.data.loginAttemptsTime;

export const selectSignUpStatus = (state: AppStoreState) => state.auth.statuses[IThunkNames.signUp];
export const selectSignInStatus = (state: AppStoreState) => state.auth.statuses[IThunkNames.signIn];
export const selectResetPasswordStatus = (state: AppStoreState) => state.auth.statuses[IThunkNames.resetPassword];

export const selectSignInError = (state: AppStoreState) => state.auth.errors[IThunkNames.signIn];
export const selectResetPasswordError = (state: AppStoreState) => state.auth.errors[IThunkNames.resetPassword];
