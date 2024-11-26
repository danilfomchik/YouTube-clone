import {createAsyncThunk} from '@reduxjs/toolkit';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import Cookies from 'js-cookie';

import {showSuccess} from '../snackbar/snackbarSlice';
import {ISlicesNames, IThunkErrorState} from '../types';
import {
    IThunkNames,
    FirebaseErrors,
    ISignInWithEmailAndPasswordThunkProps,
    ISignUpWithEmailAndPasswordThunkProps,
    IResetPasswordThunkProps,
} from './types';
import {auth} from '@/app/firebase/firebase-config';
import {SearchParamsKeys, StorageKeys, AuthSearchParamsValues} from '@/app/services/types';
import {prepareUserData} from './utils';
import {onAddImageToStorage, onAddUserToDatabase} from '@/app/firebase/firebase-utils';

export const onUserSignUpWithEmailAndPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${IThunkNames.signUp}`,
    async ({userData, addParams, setError}: ISignUpWithEmailAndPasswordThunkProps, {rejectWithValue, dispatch}) => {
        try {
            const {displayName, email, password, photoURL} = userData;

            const {user} = await createUserWithEmailAndPassword(auth, email, password);
            const imageUrl = await onAddImageToStorage(photoURL, user.uid);

            onAddUserToDatabase(
                {
                    email,
                    uid: user.uid,
                },
                user.uid,
            );

            updateProfile(user, {
                photoURL: imageUrl,
                displayName,
            });

            addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
            dispatch(showSuccess({message: 'User successfully registered.'}));
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            if (setError && code === FirebaseErrors.alreadyExistedEmail) {
                setError('email', {
                    type: 'manual',
                    message: 'Account with this email is already exist',
                });
            }

            return rejectWithValue({name, message, stack, code});
        }
    },
);

export const onUserSignInWithEmailAndPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${IThunkNames.signIn}`,
    async ({email, password, deleteParams}: ISignInWithEmailAndPasswordThunkProps, {rejectWithValue, dispatch}) => {
        try {
            const {user} = await signInWithEmailAndPassword(auth, email, password);

            Cookies.set(StorageKeys.userId, JSON.stringify(user.uid), {secure: true});

            if (deleteParams) {
                deleteParams(SearchParamsKeys.authKey);
            }
            dispatch(showSuccess({message: 'User successfully logged in.'}));

            return prepareUserData(user);
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            const loginAttempts = Cookies.get(StorageKeys.loginAttempts);

            if (loginAttempts) {
                let loginAttemptsCount = JSON.parse(loginAttempts);

                Cookies.set(StorageKeys.loginAttempts, JSON.stringify(++loginAttemptsCount));
            } else {
                Cookies.set(StorageKeys.loginAttempts, JSON.stringify(1));
            }

            return rejectWithValue({name, message, stack, code});
        }
    },
);

export const onUserSignOut = createAsyncThunk(
    `${ISlicesNames.auth}/${IThunkNames.signOut}`,
    async (_, {rejectWithValue}) => {
        try {
            await signOut(auth);
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            return rejectWithValue({name, message, stack, code});
        }
    },
);

export const onResetUserPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${IThunkNames.resetPassword}`,
    async ({email, addParams}: IResetPasswordThunkProps, {dispatch, rejectWithValue}) => {
        try {
            await sendPasswordResetEmail(auth, email);

            addParams([SearchParamsKeys.authKey, AuthSearchParamsValues.signInValue]);
            dispatch(showSuccess({message: 'Password reset link were send.'}));
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            return rejectWithValue({name, message, stack, code});
        }
    },
);
