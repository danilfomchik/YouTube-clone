import {useSearchParams, useRouter, usePathname} from 'next/navigation';
import {useCallback, useMemo} from 'react';

import {SearchParamsKeys} from '../types';

const redirectSearchKeys = [SearchParamsKeys.searchKey];

export const useChangeParams = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

    const addParams = useCallback(
        ([key, value]: [SearchParamsKeys, string]) => {
            params.set(key, value);
            replace(`${redirectSearchKeys.includes(key) ? '/' : pathname}?${params.toString()}`);
        },
        [params, pathname, replace],
    );

    const deleteParams = useCallback(
        (key: string) => {
            params.delete(key);
            replace(`${pathname}?${params.toString()}`);
        },
        [params, pathname, replace],
    );

    return {addParams, deleteParams, searchParams};
};
