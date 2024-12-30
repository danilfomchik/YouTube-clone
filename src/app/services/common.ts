import type {AxiosResponse} from 'axios';
import axios, {AxiosError} from 'axios';

import {IError, IFetch} from './types';

export const fetchWrap = async ({request, method = 'GET', override = {}}: IFetch) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: '*/*',
        ...override,
    };
    return axios
        .request({
            url: request.url,
            method,
            headers,
            data: request.body,
            responseType: 'json',
        })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError<IError>) => {
            throw err || 'error';
        });
};
