import type {AsyncThunk} from '@reduxjs/toolkit';

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>;

export interface ILoadingState {
    isLoading: {[key: string]: boolean};
    error: {[key: string]: string | null};
}

export enum StatusesTypes {
    loading = 'loading',
    finished = 'finished',
    error = 'error',
}

export interface ErrorState {
    error: {
        name: string;
        message: string;
    };
    payload?: {
        status: number;
        statusText: string;
        data: any;
    };
    requestId: string;
}

export interface IThunkErrorState {
    name: string;
    message: string;
    stack: string;
    code: string;
}

export enum ISlicesNames {
    snackbar = 'snackbar',
    navbar = 'navbar',
    accountMenu = 'accountMenu',
    auth = 'auth',
    videosData = 'videosData',
    categoriesData = 'categoriesData',
}

export type SliceNames = ISlicesNames;
