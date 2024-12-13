import {Dispatch} from 'react';
import type {AnyAction} from '@reduxjs/toolkit';

import {IGenericState} from './createGenericSlice';
import {StatusesTypes} from './types';
import {AppStoreState} from './store';

export interface ICommonThunkParams {
    force?: boolean;
}

export const thunkCondition =
    (sliceName: keyof AppStoreState, thunkName: string) => (arg: ICommonThunkParams | any, helpers: any) => {
        if (arg?.force) {
            return true;
        }

        const state = helpers.getState() as AppStoreState;

        const slice = state[sliceName] as unknown as IGenericState<any>;

        const fetchStatus = slice?.statuses[thunkName];

        return !(fetchStatus === StatusesTypes.finished || fetchStatus === StatusesTypes.loading);
    };

export const handleResponse = (message: string, type: string) => (dispatch: Dispatch<AnyAction>) => {
    dispatch({type, successNotification: message});
};
