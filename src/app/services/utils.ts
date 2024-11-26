import Cookies from 'js-cookie';

import {StorageKeys} from './types';

export const getParsedStorageValue = (key: StorageKeys, defaultValue?: unknown) => {
    const storageValue = Cookies.get(key);
    const parsedValue = storageValue ? JSON.parse(storageValue) : defaultValue;

    return parsedValue;
};
