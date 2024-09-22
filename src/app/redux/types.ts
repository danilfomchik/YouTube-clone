import type {AsyncThunk} from '@reduxjs/toolkit';

import store from '@/app/redux/store';

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

export enum ISlicesNames {
    snackbar = 'snackbar',
    stories = 'stories',
    navbar = 'navbar',
}

export type SliceNames = ISlicesNames;

export type IRootState = ReturnType<typeof store.getState>;
