import {
    channelsInfoHandler,
    searchVideosHandler,
    videosInfoHandler,
    categoriesHandler,
} from '@/app/(home)/__tests__/mswHandlers';
import {suggestionsHandler} from '@/app/redux/suggestions/__test__/mswHandlers';

export const handlers = [
    suggestionsHandler,
    channelsInfoHandler,
    searchVideosHandler,
    videosInfoHandler,
    categoriesHandler,
];
