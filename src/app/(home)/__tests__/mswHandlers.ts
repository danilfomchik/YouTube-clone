import {http, HttpResponse} from 'msw';

import {
    channelInfoMockTest1,
    channelInfoMockTest2,
    emptySearchQuery,
    mockedSearchVideosList,
    mockedVideosList,
    searchQuery,
    videoInfoMockTest1,
    videoInfoMockTest2,
} from './mocks';
import {MockedChannelInfo, MockedVideoInfo} from './types';

const mockedChannelInfo = {
    [MockedChannelInfo.test1]: channelInfoMockTest1,
    [MockedChannelInfo.test2]: channelInfoMockTest2,
};

const mockedVideoInfo = {
    [MockedVideoInfo.test1]: videoInfoMockTest1,
    [MockedVideoInfo.test2]: videoInfoMockTest2,
};

export const channelsInfoHandler = http.get('https://youtube.googleapis.com/youtube/v3/channels', async ({request}) => {
    const url = new URL(request.url);

    const channelIdQuery = url.searchParams.get('id');

    if (channelIdQuery) {
        return HttpResponse.json(mockedChannelInfo[channelIdQuery as keyof typeof mockedChannelInfo]);
    }

    return HttpResponse.json({});
});

export const searchVideosHandler = http.get('https://youtube.googleapis.com/youtube/v3/search', async ({request}) => {
    const url = new URL(request.url);

    const videoQuery = url.searchParams.get('q');

    if (videoQuery === searchQuery) {
        return HttpResponse.json(mockedSearchVideosList);
    } else if (videoQuery === emptySearchQuery) {
        return HttpResponse.json({
            items: [],
        });
    }

    return HttpResponse.json(
        {
            items: [],
        },
        {status: 404},
    );
});

export const videosInfoHandler = http.get('https://youtube.googleapis.com/youtube/v3/videos', async ({request}) => {
    const url = new URL(request.url);

    const videoIdQuery = url.searchParams.get('id');

    if (videoIdQuery) {
        return HttpResponse.json(mockedVideoInfo[videoIdQuery as keyof typeof mockedVideoInfo]);
    }

    return HttpResponse.json(mockedVideosList);
});
