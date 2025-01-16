import type {ResponseType} from 'axios';

interface Request {
    url: string;
    body?: any;
}

export interface IFetch {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    request: Request;
    override?: {
        [key: string]: string;
    };
    responseType?: ResponseType;
}

export interface IError {
    message: string | string[];
}

export interface IParams {
    name: string;
    value: string | number;
}

export enum SearchParamsKeys {
    authKey = 'auth',
    searchKey = 'search_query',
}

export enum StorageKeys {
    userId = 'userId',
    loginAttempts = 'loginAttempts',
    loginAttemptsTime = 'loginAttemptsTime',
    regionCode = 'regionCode',
    currentCategory = 'currentCategory',
    currentCategoryIndex = 'currentCategoryIndex',
}

export enum AuthSearchParamsValues {
    signInValue = 'sign-in',
    signUpValue = 'sign-up',
    resetPasswordValue = 'reset-password',
}

export enum URLS {
    videos = 'videos',
    search = 'search',
    channels = 'channels',
    videoCategories = 'videoCategories',
}
