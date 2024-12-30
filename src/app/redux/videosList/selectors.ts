import {AppStoreState} from '../store';
import {StatusesTypes} from '../types';

export const selectVideos = (state: AppStoreState) => state.videosData.data.videos;
export const selectIsLoadVideoDataFinished = (state: AppStoreState) =>
    state.videosData.statuses.loadVideoData === StatusesTypes.finished;
export const selectNextPageToken = (state: AppStoreState) => state.videosData.data.nextPageToken;
export const selectIsVideoLoading = (videoId: string) => (state: AppStoreState) =>
    state.videosData.data.loadingVideos.includes(videoId);
