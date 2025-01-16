import {createAsyncThunk} from '@reduxjs/toolkit';

import {ISlicesNames, IThunkErrorState} from '../types';
import {ICategory, IThunkNames} from './types';
import {fetchWrap} from '@/app/services/common';
import {URLS} from '@/app/services/types';
import {YOUTUBE_API_URL} from '@/app/services/constants';
import {urlParamsBuilder} from '@/app/services/utils';

export const onLoadCategoriesList = createAsyncThunk(
    `${ISlicesNames.categoriesData}/${IThunkNames.onLoadCategoriesList}`,
    async ({regionCode}: {regionCode: string}, {rejectWithValue}) => {
        try {
            const params = urlParamsBuilder([
                {name: 'part', value: 'snippet'},
                {name: 'regionCode', value: regionCode},
            ]);

            const response: {
                items: ICategory[];
            } = await fetchWrap({
                request: {
                    url:
                        `${YOUTUBE_API_URL}/${URLS.videoCategories}` +
                        `?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}${params}`,
                },
            });

            return response;
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            return rejectWithValue({name, message, stack, code});
        }
    },
);
