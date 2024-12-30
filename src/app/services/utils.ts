import Cookies from 'js-cookie';

import {IParams, StorageKeys} from './types';

export const getParsedStorageValue = (key: StorageKeys, defaultValue?: any) => {
    const storageValue = Cookies.get(key);
    const parsedValue = storageValue ? storageValue : defaultValue;

    return parsedValue;
};

export const urlParamsBuilder = (newParams: IParams[], defaultParams?: string) => {
    const urlParams = newParams.map(param => {
        if (param.value) {
            return `&${param.name}=${param.value}`;
        }

        return '';
    });

    const newParamsQuery = urlParams.length ? `${urlParams.join('')}` : '';

    return defaultParams ? `${defaultParams}${newParamsQuery}` : newParamsQuery;
};
