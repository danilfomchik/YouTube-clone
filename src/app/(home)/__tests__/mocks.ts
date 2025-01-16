import {Responses} from '../components/VideosList/VideoItem/types';
import {MockedChannelInfo, MockedVideoInfo} from './types';

export const searchQuery = 'test-query';
export const emptySearchQuery = 'empty-query';
export const testCategory = '1';

export const mockedVideosList = {
    items: [
        {
            kind: Responses.video,
            etag: 'YfVtGMqT_d45iRYbyInolW5oRQk',
            id: 'Z8en_A09EDg',
            snippet: {
                publishedAt: '2024-12-29T17:56:35Z',
                channelId: MockedChannelInfo.searchChannel1,
                title: 'A Terrifying Night We’ll NEVER Forget',
                description: 'A Terrifying Night We’ll',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
                channelTitle: 'Test1 title',
            },
            contentDetails: {
                duration: 'PT20M27S',
            },
            statistics: {
                viewCount: '4428256',
            },
        },
        {
            kind: Responses.video,
            etag: '7w8kBxmAN7ZbtA7wRo1eB-ohykY',
            id: '3RBznc0VuQs',
            snippet: {
                publishedAt: '2024-12-29T22:51:25Z',
                channelId: MockedChannelInfo.searchChannel2,
                title: 'WE ASKED KAED TO BE GOD PARENTS !!',
                description: 'Use our code for 10% off your SeatGeek order*.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
                channelTitle: 'Test2 title',
            },
            contentDetails: {
                duration: 'PT32M7S',
            },
            statistics: {
                viewCount: '415401',
            },
        },
    ],
};

export const mockedSearchVideosList = {
    items: [
        {
            kind: Responses.search,
            etag: 'YfVtGMqT_d45iRYbyInolW5oRQk',
            id: {
                kind: 'youtube#video',
                videoId: MockedVideoInfo.searchVideo1,
            },
            snippet: {
                publishedAt: '2024-12-29T17:56:35Z',
                channelId: MockedChannelInfo.searchChannel1,
                channelTitle: 'Test1 title',
                title: 'A Terrifying Night We’ll NEVER Forget',
                description: 'A Terrifying Night We’ll',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
            },
        },
        {
            kind: Responses.search,
            etag: '7w8kBxmAN7ZbtA7wRo1eB-ohykY',
            id: {
                kind: 'youtube#video',
                videoId: MockedVideoInfo.searchVideo2,
            },
            snippet: {
                publishedAt: '2024-12-29T22:51:25Z',
                channelId: MockedChannelInfo.searchChannel2,
                channelTitle: 'Test2 title',
                title: 'WE ASKED KAED TO BE GOD PARENTS !!',
                description: 'Use our code for 10% off your SeatGeek order*.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
            },
        },
    ],
};

export const mockedVideosByCategory = {
    items: [
        {
            kind: Responses.search,
            etag: 'YfVtGMqT_d45iRYbyInolW5oRQk',
            id: {
                kind: 'youtube#video',
                videoId: MockedVideoInfo.categoryVideo1,
            },
            snippet: {
                publishedAt: '2024-12-29T17:56:35Z',
                channelId: MockedChannelInfo.categoryChannel1,
                channelTitle: 'Category Test1 title',
                title: 'A Terrifying Night We’ll NEVER Forget',
                description: 'A Terrifying Night We’ll',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/Z8en_A09EDg/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
            },
        },
        {
            kind: Responses.search,
            etag: '7w8kBxmAN7ZbtA7wRo1eB-ohykY',
            id: {
                kind: 'youtube#video',
                videoId: MockedVideoInfo.categoryVideo2,
            },
            snippet: {
                publishedAt: '2024-12-29T22:51:25Z',
                channelId: MockedChannelInfo.categoryChannel2,
                channelTitle: 'Category Test2 title',
                title: 'WE ASKED KAED TO BE GOD PARENTS !!',
                description: 'Use our code for 10% off your SeatGeek order*.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/3RBznc0VuQs/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
            },
        },
    ],
};

export const searchChannelInfoMock1 = {
    items: [
        {
            kind: 'youtube#channel',
            etag: 'c6VVHDSQeaUhiiEhZ4YXvCDzVPc',
            id: MockedChannelInfo.searchChannel1,
            snippet: {
                title: 'Test1 title',
                description: 'test description',
                customUrl: '@test1',
                publishedAt: '2017-04-13T04:00:38Z',
                thumbnails: {
                    default: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s88-c-k-c0x00ffffff-no-rj`,
                        width: 88,
                        height: 88,
                    },
                    medium: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s240-c-k-c0x00ffffff-no-rj`,
                        width: 240,
                        height: 240,
                    },
                    high: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s800-c-k-c0x00ffffff-no-rj`,
                        width: 800,
                        height: 800,
                    },
                },
                country: 'US',
            },
            contentDetails: {
                relatedPlaylists: {
                    likes: '',
                    uploads: 'UUja7QUMRG9AD8X2F_vXFb9A',
                },
            },
            statistics: {
                viewCount: '9313280540',
            },
        },
    ],
};

export const searchChannelInfoMock2 = {
    items: [
        {
            kind: 'youtube#channel',
            etag: 'c6VVHDSQeaUhiiEhZ4YXvCDzVPc',
            id: MockedChannelInfo.searchChannel2,
            snippet: {
                title: 'Test2 title',
                description: 'test description',
                customUrl: '@test2',
                publishedAt: '2017-04-13T04:00:38Z',
                thumbnails: {
                    default: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s88-c-k-c0x00ffffff-no-rj`,
                        width: 88,
                        height: 88,
                    },
                    medium: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s240-c-k-c0x00ffffff-no-rj`,
                        width: 240,
                        height: 240,
                    },
                    high: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s800-c-k-c0x00ffffff-no-rj`,
                        width: 800,
                        height: 800,
                    },
                },
                country: 'US',
            },
            contentDetails: {
                relatedPlaylists: {
                    likes: '',
                    uploads: 'UUja7QUMRG9AD8X2F_vXFb9A',
                },
            },
            statistics: {
                viewCount: '9313280540',
            },
        },
    ],
};

export const categoryChannelInfoMock1 = {
    items: [
        {
            kind: 'youtube#channel',
            etag: 'c6VVHDSQeaUhiiEhZ4YXvCDzVPc',
            id: MockedChannelInfo.categoryChannel1,
            snippet: {
                title: 'Test3 title',
                description: 'test description',
                customUrl: '@test3',
                publishedAt: '2017-04-13T04:00:38Z',
                thumbnails: {
                    default: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s88-c-k-c0x00ffffff-no-rj`,
                        width: 88,
                        height: 88,
                    },
                    medium: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s240-c-k-c0x00ffffff-no-rj`,
                        width: 240,
                        height: 240,
                    },
                    high: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s800-c-k-c0x00ffffff-no-rj`,
                        width: 800,
                        height: 800,
                    },
                },
                country: 'US',
            },
            contentDetails: {
                relatedPlaylists: {
                    likes: '',
                    uploads: 'UUja7QUMRG9AD8X2F_vXFb9A',
                },
            },
            statistics: {
                viewCount: '9313280540',
            },
        },
    ],
};

export const categoryChannelInfoMock2 = {
    items: [
        {
            kind: 'youtube#channel',
            etag: 'c6VVHDSQeaUhiiEhZ4YXvCDzVPc',
            id: MockedChannelInfo.categoryChannel2,
            snippet: {
                title: 'Test4 title',
                description: 'test description',
                customUrl: '@test4',
                publishedAt: '2017-04-13T04:00:38Z',
                thumbnails: {
                    default: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s88-c-k-c0x00ffffff-no-rj`,
                        width: 88,
                        height: 88,
                    },
                    medium: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s240-c-k-c0x00ffffff-no-rj`,
                        width: 240,
                        height: 240,
                    },
                    high: {
                        url:
                            `https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_` +
                            `QPoXUOpFKvmAOg=s800-c-k-c0x00ffffff-no-rj`,
                        width: 800,
                        height: 800,
                    },
                },
                country: 'US',
            },
            contentDetails: {
                relatedPlaylists: {
                    likes: '',
                    uploads: 'UUja7QUMRG9AD8X2F_vXFb9A',
                },
            },
            statistics: {
                viewCount: '9313280540',
            },
        },
    ],
};

export const searchVideoInfoMock1 = {
    items: [
        {
            kind: 'youtube#video',
            etag: '4RywmWxMQ6E8N0poJIgf9T_gtZw',
            id: MockedVideoInfo.searchVideo1,
            snippet: {
                publishedAt: '2025-01-02T20:00:21Z',
                channelId: MockedChannelInfo.searchChannel1,
                title: 'Test1 title',
                description: 'Test1 description',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
                channelTitle: 'Test1 channel title',
            },
            contentDetails: {
                duration: 'PT16M14S',
            },
            statistics: {
                viewCount: '77352',
            },
        },
    ],
};

export const searchVideoInfoMock2 = {
    items: [
        {
            kind: 'youtube#video',
            etag: '4RywmWxMQ6E8N0poJIgf9T_gtZw',
            id: MockedVideoInfo.searchVideo2,
            snippet: {
                publishedAt: '2025-01-02T20:00:21Z',
                channelId: MockedChannelInfo.searchChannel2,
                title: 'Test2 title',
                description: 'Test2 description',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
                channelTitle: 'Test2 channel title',
            },
            contentDetails: {
                duration: 'PT16M14S',
            },
            statistics: {
                viewCount: '77352',
            },
        },
    ],
};

export const categoryVideoInfoMock1 = {
    items: [
        {
            kind: 'youtube#video',
            etag: '4RywmWxMQ6E8N0poJIgf9T_gtZw',
            id: MockedVideoInfo.categoryVideo1,
            snippet: {
                publishedAt: '2025-01-02T20:00:21Z',
                channelId: MockedChannelInfo.categoryChannel1,
                title: 'Test3 title',
                description: 'Test3 description',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
                channelTitle: 'Test3 channel title',
            },
            contentDetails: {
                duration: 'PT16M14S',
            },
            statistics: {
                viewCount: '77352',
            },
        },
    ],
};

export const categoryVideoInfoMock2 = {
    items: [
        {
            kind: 'youtube#video',
            etag: '4RywmWxMQ6E8N0poJIgf9T_gtZw',
            id: MockedVideoInfo.categoryVideo2,
            snippet: {
                publishedAt: '2025-01-02T20:00:21Z',
                channelId: MockedChannelInfo.categoryChannel2,
                title: 'Test4 title',
                description: 'Test4 description',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                    standard: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/sddefault.jpg',
                        width: 640,
                        height: 480,
                    },
                    maxres: {
                        url: 'https://i.ytimg.com/vi/YsGbECd5eh8/maxresdefault.jpg',
                        width: 1280,
                        height: 720,
                    },
                },
                channelTitle: 'Test4 channel title',
            },
            contentDetails: {
                duration: 'PT16M14S',
            },
            statistics: {
                viewCount: '77352',
            },
        },
    ],
};

export const mockedCategories = [
    {
        id: testCategory,
        snippet: {
            title: 'Film & Animation',
        },
    },
    {
        id: '2',
        snippet: {
            title: 'Autos & Vehicles',
        },
    },
];
