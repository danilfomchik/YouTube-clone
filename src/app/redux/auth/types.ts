import {UseFormSetError} from 'react-hook-form';

import {SearchParamsKeys} from '@/app/services/types';

export interface IUser {
    displayName: string;
    email: string;
    lastLogin: string;
    uid: string;
    photoURL: string;
}

export interface IDataBaseUser {
    email: string;
    uid: string;
}

export interface ICommonState {
    userLoggedIn: boolean;
    userData: IUser | null;
}

export enum IThunkNames {
    signUp = 'signUp',
    signIn = 'signIn',
    signOut = 'signOut',
    resetPassword = 'resetPassword',
}

export enum FirebaseErrors {
    alreadyExistedEmail = 'auth/email-already-in-use',
}

export interface ISignInWithEmailAndPasswordThunkProps {
    email: string;
    password: string;
    deleteParams: (key: string) => void;
}
export interface IResetPasswordThunkProps {
    email: string;
    addParams: ([key, value]: [SearchParamsKeys, string]) => void;
}

interface ISignUpUserData {
    displayName: string;
    email: string;
    password: string;
    photoURL?: File;
}

export interface ISignUpWithEmailAndPasswordThunkProps {
    userData: ISignUpUserData;
    setError: UseFormSetError<{
        email: string;
        password: string;
    }>;
    addParams: ([key, value]: [SearchParamsKeys, string]) => void;
}
