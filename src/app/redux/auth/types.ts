import {UseFormSetError} from 'react-hook-form';
import {Auth} from 'firebase/auth';

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
    userLocation: string;
    loginAttempts: number;
    maxAttemptsCountAchieved: boolean;
    loginAttemptsTime: number;
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

export enum AuthMethods {
    emailAndPassword = 'email-and-password',
    google = 'google',
    facebook = 'facebook',
}

export type AuthMethodsWithProviders = Exclude<AuthMethods, AuthMethods.emailAndPassword>;

export type TLoginPayload = [Auth, string, string];

export type UserSignInProps =
    | {
          loginMethod: AuthMethods.emailAndPassword;
          loginPayload: TLoginPayload;
      }
    | {
          loginMethod: AuthMethodsWithProviders;
          loginPayload?: never;
      };

export type IUserSignInThunkProps = {
    deleteParams: (key: string) => void;
} & UserSignInProps;
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
