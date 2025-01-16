import {http, HttpResponse} from 'msw';

import {
    searchChannelInfoMock1,
    searchChannelInfoMock2,
    categoryChannelInfoMock1,
    categoryChannelInfoMock2,
    emptySearchQuery,
    mockedCategories,
    mockedSearchVideosList,
    mockedVideosByCategory,
    mockedVideosList,
    searchQuery,
    testCategory,
    searchVideoInfoMock1,
    searchVideoInfoMock2,
    categoryVideoInfoMock1,
    categoryVideoInfoMock2,
} from './mocks';
import {MockedChannelInfo, MockedVideoInfo} from './types';

const mockedChannelInfo = {
    [MockedChannelInfo.searchChannel1]: searchChannelInfoMock1,
    [MockedChannelInfo.searchChannel2]: searchChannelInfoMock2,
    [MockedChannelInfo.categoryChannel1]: categoryChannelInfoMock1,
    [MockedChannelInfo.categoryChannel2]: categoryChannelInfoMock2,
};

const mockedVideoInfo = {
    [MockedVideoInfo.searchVideo1]: searchVideoInfoMock1,
    [MockedVideoInfo.searchVideo2]: searchVideoInfoMock2,
    [MockedVideoInfo.categoryVideo1]: categoryVideoInfoMock1,
    [MockedVideoInfo.categoryVideo2]: categoryVideoInfoMock2,
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
    const categoryId = url.searchParams.get('videoCategoryId');

    if (videoQuery === searchQuery) {
        return HttpResponse.json(mockedSearchVideosList);
    } else if (videoQuery === emptySearchQuery) {
        return HttpResponse.json({
            items: [],
        });
    }

    if (categoryId === testCategory) {
        return HttpResponse.json(mockedVideosByCategory);
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

export const categoriesHandler = http.get('https://youtube.googleapis.com/youtube/v3/videoCategories', () => {
    return HttpResponse.json({
        items: mockedCategories,
    });
});
