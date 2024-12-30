import {createAsyncThunk} from '@reduxjs/toolkit';

import {ISlicesNames, IThunkErrorState} from '../types';
import {ILoadVideoInfoThunkProps, ILoadVideoInfoThunkResponse, ILoadVideosListThunkProps, IThunkNames} from './types';
import {fetchWrap} from '@/app/services/common';
import {maxVideosResults} from '@/app/services/constants';
import {urlParamsBuilder} from '@/app/services/utils';
import {IChannel, Responses} from '@/app/(home)/components/VideosList/VideoItem/types';
import {URLS} from '@/app/services/types';
import {defaultUrls, loadInfo} from './utils';

export const onLoadVideosList = createAsyncThunk(
    `${ISlicesNames.videosData}/${IThunkNames.onLoadVideosList}`,
    async (
        {nextPageToken = '', searchValue, currentCategory = '', regionCode = ''}: ILoadVideosListThunkProps,
        {rejectWithValue},
    ) => {
        try {
            const defaultParams = urlParamsBuilder([
                {name: 'maxResults', value: maxVideosResults},
                {name: 'type', value: 'video'},
                {name: 'pageToken', value: nextPageToken},
                {name: 'regionCode', value: regionCode},
                {name: 'chart', value: 'mostPopular'},
            ]);
            const searchParams = urlParamsBuilder(
                [
                    {name: 'videoDuration', value: 'medium'},
                    {name: 'q', value: searchValue},
                    {name: 'videoCategoryId', value: currentCategory},
                ],
                defaultParams,
            );

            const urls = {
                [URLS.videos]: `${defaultUrls[URLS.videos]}${defaultParams}`,
                [URLS.search]: `${defaultUrls[URLS.search]}${searchParams}`,
            };
            const requestUrl = searchValue || currentCategory ? urls[URLS.search] : urls[URLS.videos];

            const response = await fetchWrap({
                request: {
                    url: requestUrl,
                },
            });

            return response;
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            return rejectWithValue({name, message, stack, code});
        }
    },
);

export const onLoadVideoInfo = createAsyncThunk(
    `${ISlicesNames.videosData}/${IThunkNames.onLoadVideoData}`,
    async ({videoId, channelId, kind}: ILoadVideoInfoThunkProps, {rejectWithValue}) => {
        try {
            const response = {} as ILoadVideoInfoThunkResponse;

            const channelInfo: {
                items: IChannel[];
            } = await loadInfo(channelId, URLS.channels);

            response['channelInfo'] = channelInfo;

            if (kind === Responses.search) {
                response['videoInfo'] = await loadInfo(videoId, URLS.videos);
            }

            return response;
        } catch (error) {
            const {name, message, stack, code} = error as IThunkErrorState;

            return rejectWithValue({name, message, stack, code});
        }
    },
);
